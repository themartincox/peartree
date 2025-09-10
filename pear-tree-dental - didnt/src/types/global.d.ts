// Global type definitions

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
  }

  interface Navigator {
    connection?: {
      effectiveType?: string
      downlink?: number
      rtt?: number
      saveData?: boolean
    }
  }
}

export {};
