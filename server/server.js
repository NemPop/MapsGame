import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import "./dataBase/dataBase.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is runnig at: ${port}`);
});

app.use("/auth", authRouter);
