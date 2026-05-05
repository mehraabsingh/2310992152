const express = require("express");
const Log = require("../logging_middleware");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  await Log("backend", "info", "route", "Home route accessed");
  res.send("Server running");
});

app.get("/notifications", async (req, res) => {
  await Log("backend", "info", "controller", "GET /notifications called");
  res.json({ message: "Notifications fetched" });
});

app.post("/notifications", async (req, res) => {
  await Log("backend", "info", "controller", "POST /notifications called");
  res.json({ message: "Notification created" });
});

app.listen(3000, async () => {
  console.log("Server running on port 3000");
  await Log("backend", "info", "handler", "Server started");
});