import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import getParsedData from "./lib/getParsedData";
import getAndHandleApiUrl from "./lib/getAndHandleApiUrl";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const apiUrl = getAndHandleApiUrl(req, res);
  if (!apiUrl) return;

  let data;
  try {
    const dataReq = await fetch(apiUrl);
    data = await dataReq.json();
  } catch (err) {
    console.error(err);
    res.status(500).end("Server error 🤮");
    return;
  }

  if (data.status === 404) {
    res.status(404).end("No country found ❌");
  } else {
    res.json(getParsedData(data));
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT} 🚀`);
});
