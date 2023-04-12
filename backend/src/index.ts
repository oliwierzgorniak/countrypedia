import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import parseData from "./lib/parseData";
const app = express();

app.get("/", async (req, res) => {
  const country = req.query.country;
  if (typeof country === "undefined") {
    res.status(400).end("no country provided");
    return;
  }

  const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
  const dataReq = await fetch(url);
  const data = await dataReq.json();

  res.json(parseData(data));
  return;
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT} 🚀`);
});
