import express from "express";
const app = express();
import dotenv from "dotenv";
import "./db/connect.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import translateRouter from "./routes/translate.routes.js";
dotenv.config();

app.use(express.json());
app.use("/server/user", userRouter);
app.use("/server/auth", authRouter);
app.use("/server/translate", translateRouter);

//middleware handle possible errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

app.listen(3000, () => {
  console.log("Server running in port 3000 !");
});
