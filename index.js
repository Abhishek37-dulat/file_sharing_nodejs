import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use("/", router);

DBConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
