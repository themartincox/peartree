const smallMap = require('./smallMap.json')

exports.handler = async function (event) {
  try {
    const postcode = (event.queryStringParameters && event.queryStringParameters.postcode) || ''
    if (!postcode) {
      return { statusCode: 400, body: JSON.stringify({ error: 'postcode required' }) }
    }
    const clean = postcode.replace(/\s+/g, '').toUpperCase()
    let outward = ''
    try {
      const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(clean)}`)
      const j = await res.json()
      if (j && j.status === 200 && j.result && j.result.outcode) {
        outward = j.result.outcode
      }
    } catch (e) {}
    if (!outward) {
      const m = clean.match(/^[A-Z]{1,2}[0-9][A-Z0-9]?/)
      outward = (m && m[0]) ? m[0] : clean.slice(0, 3)
    }
    const score = smallMap[outward] !== undefined ? smallMap[outward] : 1
    return { statusCode: 200, body: JSON.stringify({ outward, score }) }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) }
  }
}