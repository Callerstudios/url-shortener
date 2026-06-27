import { Request, Response } from "express";
import { createShortUrl, getOriginalUrl, incrementClickCount } from "../services/url.service";

export async function shortenUrl(req: Request, res: Response) {
  try {
    const { url } = req.body;

    const result = await createShortUrl(url);

    return res.status(201).json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
export async function redirectToUrl(
    req: Request,
    res: Response
) {
    try {
        const { shortCode } = req.params;

        if (Array.isArray(shortCode)) {
          return res.status(400).json({ message: "Invalid shortcode" });
        }

        const originalUrl = await getOriginalUrl(shortCode);

        if (!originalUrl) {
          return res.status(404).json({
            message: "Short URL not found",
          });
        }
        await incrementClickCount(shortCode);
        return res.redirect(originalUrl);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }
}
