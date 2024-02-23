import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import "./db/connect.js";
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server running in port 3000 !");
});
