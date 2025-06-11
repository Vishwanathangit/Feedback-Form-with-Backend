const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

const feedbacks = []; // Temp Storage

// API Endpoints
app.post("/api/feedback", (req, res) => {
  const { name, email, rating, feedback } = req.body;

  if (!name || !email || !rating || !feedback) {
    return res.status(400).json({ message: "All Fields are Required" });
  }

  const newFeedback = { name, email, rating, feedback, submittedAt: new Date() };
  feedbacks.push(newFeedback);

  console.log("Feedback Received:", newFeedback);

  res.status(200).json({ message: "Feedback Submitted Successfully" });
});

app.get("/api/feedbacks", (req, res) => {
  res.json(feedbacks);
});

// ✅ Serve Frontend build (make sure build exists!)
app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});

// ✅ Start server AFTER all routes are defined
app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
