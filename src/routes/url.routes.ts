import { Router } from "express";
import { redirectToUrl, shortenUrl } from "../controllers/url.controller";
import { validateUrl } from "../middleware/validateUrl";
const router = Router();

router.post("/shorten", validateUrl, shortenUrl);
router.get("/:shortCode", redirectToUrl);

export default router;
