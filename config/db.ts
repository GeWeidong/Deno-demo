import { MongoClient } from "../deps.ts";

const DB_HOST_URL = Deno.env.get("DB_HOST_URL") ||
  "mongodb://localhost:27017/";
const DB_NAME = Deno.env.get("DB_NAME") || "Deno";

// 创建连接
const client = new MongoClient();
// 建立连接
client.connectWithUri(DB_HOST_URL);
// 连接数据库
const db = client.database(DB_NAME);
export default db;
