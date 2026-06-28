import { nanoid } from "nanoid";
import { db } from "../config/database";
import { UrlRow } from "../types/url.types";

export async function createShortUrl(url: string) {
  const shortCode = nanoid(7);

  await db.execute(
    `
        INSERT INTO urls(original_url, short_code)
        VALUES(?, ?)
        `,
    [url, shortCode],
  );

  return {
    originalUrl: url,
    shortCode,
    shortUrl: `https://url-shortener-o4su.onrender.com/${shortCode}`,
  };
}
export async function getOriginalUrl(shortCode: string) {
  const [rows] = await db.execute<UrlRow[]>(
    `
        SELECT original_url
        FROM urls
        WHERE short_code = ?
        `,
    [shortCode],
  );

  if (rows.length === 0) {
    return null;
  }
  return rows[0].original_url;
}
export async function incrementClickCount(shortCode: string) {
  await db.execute(
    `
        UPDATE urls
        SET click_count = click_count + 1
        WHERE short_code = ?
        `,
    [shortCode],
  );
}
export async function initDatabase() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS urls (
      id INT AUTO_INCREMENT PRIMARY KEY,
      original_url TEXT NOT NULL,
      short_code VARCHAR(20) NOT NULL UNIQUE,
      click_count INT NOT NULL DEFAULT 0,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log("Database initialized.");
}