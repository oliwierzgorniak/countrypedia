import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import getParsedData from "./lib/getParsedData";
import getAndHandleApiUrl from "./lib/getAndHandleApiUrl";
import getSwaggerDocumentation from "./lib/getSwaggerDocumentation";

dotenv.config();

const app = express();
app.use(cors());
const swaggerDocumentation = getSwaggerDocumentation();
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

/**
 * @swagger
 * /:
 *   get:
 *     description: Get info about a country
 *     parameters:
 *       - in: query
 *         name: country
 *         type: string
 *         required: true
 *         description: A full name of a country.
 *     responses:
 *       200:
 *         description: Country info
 *       400:
 *         description: Server error 🤮
 *       404:
 *         description: No country found ❌
 *       500:
 *         description: Server error 🤮
 */

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

  console.log(data);

  if (data.status === 404 || data.message === "Page Not Found") {
    res.status(404).end("No country found ❌");
  } else {
    res.json(getParsedData(data));
  }
});

app.listen(3000, () => {
  console.log(`server is running on port: ${process.env.PORT} 🚀`);
});
