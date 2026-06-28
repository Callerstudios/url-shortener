import { Router } from "express";
import { redirectToUrl, shortenUrl, viewOriginalUrl } from "../controllers/url.controller";
import { validateUrl } from "../middleware/validateUrl";
const router = Router();

router.post("/shorten", validateUrl, shortenUrl);
router.get("/:shortCode", redirectToUrl);
router.get("/view/:shortCode", viewOriginalUrl);

export default router;
