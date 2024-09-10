import express from "express";
import { getUrl, shortenUrl, checkUrl } from "../controller/urlShortController.js";

export const UrlRoutes = express.Router();

UrlRoutes.post("/", shortenUrl);
UrlRoutes.get("/:newUrl", getUrl);
UrlRoutes.post("/check", checkUrl);