const express = require("express");
const cors = require("cors");
const authroutes = require("./routes/auth.routes")

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth/", authroutes)

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Backend smarttex ativo 🟢" });
});



module.exports = app;
