const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Retrieve the IP address
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // Send the IP address as a response
  res.send(`Your IP address is: ${ipAddress}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
