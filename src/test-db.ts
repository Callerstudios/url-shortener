import { db } from "./config/database";

async function testConnection() {
  try {
    const [rows] = await db.query("SELECT * FROM urls");

    console.log(rows);
  } catch (error) {
    console.error(error);
  }
}

testConnection();
