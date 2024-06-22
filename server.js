const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.set("trust proxy", true); // Add this line

app.get("/log-ip", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(`Visitor IP: ${ip}`);
  res.json({ message: "IP logged successfully", ip: ip });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
