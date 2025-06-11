import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackForm from './pages/FeedbackForm';
import SuccessPage from './pages/SuccessPage';
import FeedbackList from './pages/FeedbackList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/feedbacks" element={<FeedbackList />} />
      </Routes>
    </Router>
  );
}

export default App;
