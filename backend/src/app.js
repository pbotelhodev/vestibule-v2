const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

/* Imports dos Routes */
const simulationRoutes = require("./routes/SimulationsRoutes");

/* Origens permitidas */
const allowedOrigins = [
  "https://vestibule.com.br",
  "https://vestibule-two.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://192.168.10.14:5173",
  "http://192.168.1.9:5173",
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

app.use("/api/simulations", simulationRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Backend vestibule ativo 🟢" });
});

module.exports = app;
