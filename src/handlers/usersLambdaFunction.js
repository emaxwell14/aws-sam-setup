const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

exports.default = async () => {
  let res;
  try {
    const client = new Client();
    await client.connect();

    res = await client.query("SELECT * from users");
    await client.end();
  } catch (error) {
    return {
      statusCode: 400,
      body: "Error loading users",
      // error,
    };
  }

  return {
    statusCode: 200,
    body: res.rows,
  };
};
