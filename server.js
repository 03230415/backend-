const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware (IMPORTANT)
app.use(express.urlencoded({ extended: true }));

// Serve frontend files from "public"
app.use(express.static("public"));

// Home page route (so "/" works)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html.html"));
});

// Handle form submission
app.post("/feedback", (req, res) => {
  const { name, email, topic, message } = req.body;

  const data = `
===== NEW FEEDBACK =====
Name: ${name}
Email: ${email}
Topic: ${topic}
Message: ${message}
========================\n`;

  console.log(data);

  // Save feedback into file
  fs.appendFileSync("feedback.txt", data);

  // Redirect user to success page
  res.redirect("/success.html");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});