// Netlify Function: postcode-enrich
// Maps an input postcode to an outward code and returns a small score based on smallMap.json
const smallMap = require('./smallMap.json')

exports.handler = async function (event, context) {
  try {
    const postcode = (event.queryStringParameters && event.queryStringParameters.postcode) || ''
    if (!postcode) {
      return { statusCode: 400, body: JSON.stringify({ error: 'postcode required' }) }
    }
    const clean = postcode.replace(/\s+/g, '').toUpperCase()
    // Try to derive outward code (e.g. NG14) by using letters up to first digit(s)
    // Simpler: use postcodes.io to get outcode if available
    let outward = ''
    try {
      const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(clean)}`)
      const j = await res.json()
      if (j && j.status === 200 && j.result && j.result.outcode) {
        outward = j.result.outcode
      }
    } catch (e) {
      // ignore external lookup failure
    }

    // Fallback: take letters/digits prefix (first 3-4 chars)
    if (!outward) {
      const m = clean.match(/^[A-Z]{1,2}[0-9][A-Z0-9]?/)
      outward = (m && m[0]) ? m[0] : clean.slice(0, 3)
    }

    const score = smallMap[outward] !== undefined ? smallMap[outward] : 1
    return {
      statusCode: 200,
      body: JSON.stringify({ outward, score }),
    }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) }
  }
}