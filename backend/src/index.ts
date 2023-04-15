import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import getParsedData from "./lib/getParsedData";
import getApiUrl from "./lib/getApiUrl";
const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const country = req.query.country;
  if (typeof country !== "string") {
    res.status(400).end("no country provided");
    return;
  }

  const apiUrl = getApiUrl(country);
  if (typeof apiUrl !== "string") {
    res.status(500).end("server error");
    return;
  }

  const dataReq = await fetch(apiUrl);
  const data = await dataReq.json();

  if (data.status === 404) {
    res.status(404).end("no country found");
    return;
  }

  res.json(getParsedData(data));
  return;
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT} 🚀`);
});
