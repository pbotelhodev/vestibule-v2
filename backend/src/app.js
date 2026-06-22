const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authroutes = require("./routes/auth.routes");
const simulationsRoutes = require("./routes/simulations.routes")
const dashboardRoutes = require("./routes/dashboard.routes")

const app = express();

/* Origens permitidas */
const allowedOrigins = [
  "https://vestibule-two.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://192.168.10.14:5173", 
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
app.use("/api/student/", simulationsRoutes)
app.use("/api/student/", dashboardRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Backend vestibule ativo 🟢" });
});

app.listen(3333, "0.0.0.0", () => {
  console.log("running on port 3333");
});

module.exports = app;
