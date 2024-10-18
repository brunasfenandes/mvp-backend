import "dotenv/config";

export default {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    database: process.env.DB_LOCAL_DBNAME || "mvpChat",
    user: process.env.DB_LOCAL_USER || "root",
    password: process.env.DB_PASSWORD || "",
  }
};