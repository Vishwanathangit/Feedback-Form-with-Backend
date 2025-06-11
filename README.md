# 💬 Feedback Form - Full Stack Application

This is a full-stack feedback form application built as part of the SD Intern Task - **Option 3**. It allows users to submit their feedback via a form, which is validated, sent to a backend API, and stored temporarily (in memory). Submitted feedbacks can also be viewed from a dedicated route.

---

## 🔧 Tech Stack

### 🔹 Frontend
- **React** (with Vite)
- **Tailwind CSS** for styling
- **Axios** for HTTP requests
- **React Router DOM** for routing

### 🔹 Backend
- **Node.js**
- **Express.js**
- **CORS** and JSON middleware

---

## 📁 Folder Structure

<pre>
  ```
  .
├── Backend/
│ └── index.js # Express server with POST and GET endpoints
│
├── Frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/ # Static files like logo
│ │ ├── pages/
│ │ │ ├── FeedbackForm.jsx # Main form page
│ │ │ ├── FeedbackList.jsx # List of all submitted feedbacks
│ │ │ └── SuccessPage.jsx # Shown after successful form submission
│ │ ├── App.jsx # React Router setup
│ │ ├── main.jsx # Entry point
│ │ └── index.css # Tailwind CSS import
│ ├── index.html
│ ├── package.json
│ └── vite.config.js
  ```
</pre>


---

## 🌐 Live Routes

| Page | Path | Description |
|------|------|-------------|
| 📝 Feedback Form | `/` | Main page to submit feedback |
| ✅ Success Page | `/success` | Confirmation after submission |
| 📋 Feedback List | `/feedbacks` | Displays all submitted feedbacks |

---

## 🚀 Getting Started

### 1. Clone the repository
git clone https://github.com/Vishwanathangit/Feedback-Form-with-Backend.git
cd Feedback-Form-with-Backend

2. Run the Backend Server
cd Backend
npm install
node index.js
# Runs on http://localhost:3000

3. Run the Frontend
cd Frontend
npm install
npm run dev
# Runs on http://localhost:5173

📮 API Endpoints
Method	Endpoint	Description
POST	/api/feedback	Submit feedback data
GET	/api/feedbacks	Retrieve all submitted feedbacks

✅ Features
Responsive and stylish form (Tailwind CSS)

Form validation and real-time error handling

Success message with redirect

Feedback storage on backend (in-memory array)

Feedback list viewer page

🔗 GitHub Repo
👉 Click to visit repository [https://github.com/Vishwanathangit/Feedback-Form-with-Backend.git]

Live Demo [https://feedback-form-with-backend-1.onrender.com]
