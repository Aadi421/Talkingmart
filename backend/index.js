import express from "express";
import { APP_PORT } from "./config";
import routes from "./routes";
const app = express();

const cors = require("cors")
import db from "./config/mongoose";

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cors({ origin: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());
app.use("/", routes);


app.listen(APP_PORT, (err) => {
  if (err) {
    console.log("Error in creating server !");
  }
  console.log(`Server is on port http://localhost:${APP_PORT}.`);
});