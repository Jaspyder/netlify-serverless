import { sendData } from "./utils/readerUtils"
const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const data = await sendData(body.site);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow from anywhere
      },
      body: JSON.stringify(data),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }