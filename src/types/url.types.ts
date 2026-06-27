import { RowDataPacket } from "mysql2";

export interface UrlRow extends RowDataPacket {
  id: number;
  original_url: string;
  short_code: string;
  click_count: number;
  created_at: Date;
}
