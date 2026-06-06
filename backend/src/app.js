const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authroutes = require("./routes/auth.routes");

const app = express();

/* Origens permitidas */
const allowedOrigins = [
  "https://vestibule-two.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(helmet());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS: origem não permitida"));
      }
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/auth/", authroutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Backend vestibule ativo 🟢" });
});

module.exports = app;
