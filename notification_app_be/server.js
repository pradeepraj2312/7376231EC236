const express = require("express");
const app = express();
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

app.listen(5000, () => console.log("Server started on port 5000"));
