require("dotenv").config();

const serverPort = process.env.SERVER_PORT;
const mongodbURL =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/6sense";

module.exports = {
  serverPort,
  mongodbURL,
};
