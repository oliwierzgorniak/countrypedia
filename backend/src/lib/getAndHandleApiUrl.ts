import { Request, Response } from "express";
import getApiUrl from "./getApiUrl";

export default function getAndHandleApiUrl(req: Request, res: Response) {
  const country = req.query.country;

  if (typeof country !== "string") {
    res.status(400).end("No country provided 🖋️");
    return false; // returning false to check if end higher function
  }

  const apiUrl = getApiUrl(country);
  if (typeof apiUrl !== "string") {
    res.status(500).end("Server error 🤮"); // XD
    return false;
  }

  return apiUrl;
}
