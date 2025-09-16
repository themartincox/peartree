import { createClient, type CreateClientParams } from 'contentful'
import pLimit from 'p-limit'

const CONCURRENCY = Number(process.env.CONTENTFUL_CONCURRENCY ?? 4)
const limit = pLimit(CONCURRENCY)

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: (process.env.CONTENTFUL_USE_PREVIEW === 'true'
    ? process.env.CONTENTFUL_ACCESS_TOKEN
    : process.env.CONTENTFUL_DELIVERY_TOKEN)!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  // SDK has basic retry, but we add our own guard/logging too
  retryOnError: true,
  // helpful logs (you can also gate by NODE_ENV === 'production')
  logHandler: (level, data) => {
    // eslint-disable-next-line no-console
    console[level]?.('[contentful]', data?.message || data)
  }
} as CreateClientParams)

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)) }

async function withRetries<T>(fn: () => Promise<T>, ctx: string, max = 6) {
  let attempt = 0
  // Exponential backoff starting ~400ms
  while (true) {
    try {
      return await fn()
    } catch (err: any) {
      const status = err?.status || err?.response?.status
      const retryAfter = Number(err?.response?.headers?.get?.('retry-after')) || 0
      const isRetryable = status === 429 || (status >= 500 && status < 600)
      attempt++
      if (!isRetryable || attempt > max) {
        console.error(`[contentful:${ctx}] FAILED after ${attempt} attempts`, { status, err: err?.message })
        throw err
      }
      const base = Math.min(1000 * 2 ** (attempt - 1), 8000)
      const delay = Math.max(base, retryAfter * 1000)
      console.warn(`[contentful:${ctx}] ${status} retrying in ${delay}ms (attempt ${attempt}/${max})`)
      await sleep(delay)
    }
  }
}

export async function cfQuery<T>(ctx: string, call: () => Promise<T>): Promise<T> {
  return limit(() => withRetries(call, ctx))
}

// Example helpers (use these in your loaders/server components)
export async function getEntries<T>(query: any, ctx = 'getEntries') {
  return cfQuery(ctx, () => client.getEntries<T>(query))
}
export async function getEntry<T>(id: string, ctx = `getEntry:${id}`) {
  return cfQuery(ctx, () => client.getEntry<T>(id))
}
