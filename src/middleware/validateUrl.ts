import { Request, Response, NextFunction } from "express";
import { createUrlSchema } from "../validators/url.validator";

export function validateUrl(req: Request, res: Response, next: NextFunction) {
  const result = createUrlSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: result.error.issues[0].message,
    });
  }

  next();
}
