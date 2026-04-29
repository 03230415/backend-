const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static("public"));

// Home route
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

  // Save to file
  fs.appendFile("feedback.txt", data, (err) => {
    if (err) {
      console.error("Error saving feedback:", err);
      return res.status(500).send("Something went wrong");
    }

    // Redirect after success
    res.redirect("/success.html");
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
