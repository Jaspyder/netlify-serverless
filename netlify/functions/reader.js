// const sendData = require("./utils/readerUtils");
// import {sendData} from './utils/readerUtils'

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body);
  console.log("Body:", event.body)
//   const data = await sendData(body.site);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow from anywhere
    },
    body: JSON.stringify(event.body),
  };
};