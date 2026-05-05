const axios = require("axios");
const config = require("./config"); // THIS MUST BE THIS PATH

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      `${config.BASE_URL}/logs`,
      { stack, level, package: pkg, message },
      {
        headers: {
          Authorization: `Bearer ${config.TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Log success:", response.data);
  } catch (error) {
    console.error("❌ Log failed:", error.response?.data || error.message);
  }
}

module.exports = Log;