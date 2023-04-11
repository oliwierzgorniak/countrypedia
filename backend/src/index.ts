import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT} 🚀`);
});
