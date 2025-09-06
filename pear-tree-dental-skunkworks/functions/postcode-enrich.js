export async function handler(event, context) {
  const postcode = event.queryStringParameters.postcode || "";
  let score = 0;

  // Very basic mock scoring logic based on NG postcodes
  const highValueAreas = ["NG1", "NG2", "NG3", "NG13", "NG14"];
  const midValueAreas = ["NG4", "NG5", "NG6", "NG7"];

  const upperPostcode = postcode.trim().toUpperCase();
  if (highValueAreas.some(pc => upperPostcode.startsWith(pc))) {
    score = 5;
  } else if (midValueAreas.some(pc => upperPostcode.startsWith(pc))) {
    score = 3;
  } else if (upperPostcode) {
    score = 1;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ score }),
  };
}
