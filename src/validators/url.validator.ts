import { z } from "zod";

export const createUrlSchema = z.object({
  url: z.url("Please provide a valid URL.").min(1, "URL is required."),
});
