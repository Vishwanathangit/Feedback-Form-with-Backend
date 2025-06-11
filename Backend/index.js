const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(cors())

//Middleware
app.use(express.json())

const feedbacks = [] // Temp Storage

app.post("/api/feedback", (req,res) => {
    const {name, email, rating, feedback } = req.body

    if(!name || !email || !rating || !feedback) {
        return res.status(400).json({message : "All Fileds are Required"})
    }

    const newFeedback = {name, email, rating, feedback, submittedAt: new Date() }
    feedbacks.push(newFeedback)

    console.log("Feedback Received:", newFeedback)

    res.status(200).json({message: "Feedback Sumbitted Successfully"})
})

app.get("/api/feedbacks", (req,res) => {
    res.json(feedbacks)
})

app.listen(PORT,()=>{
    console.log("Server Started...")
})

const path = require("path");

// Serve frontend
app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});
