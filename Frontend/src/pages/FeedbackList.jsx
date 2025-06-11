import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('https://feedback-form-with-backend.onrender.com/api/feedbacks')
      .then(res => {
        setFeedbacks(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch feedbacks:", err);
      });
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">All Feedbacks</h1>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {feedbacks.length === 0 ? (
          <p className="text-center text-gray-600">No feedbacks available yet.</p>
        ) : (
          feedbacks.map((fb, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <p><span className="font-semibold">Name:</span> {fb.name}</p>
              <p><span className="font-semibold">Email:</span> {fb.email}</p>
              <p><span className="font-semibold">Rating:</span> {fb.rating}</p>
              <p><span className="font-semibold">Feedback:</span> {fb.feedback}</p>
              {fb.submittedAt && (
                <p className="text-sm text-gray-500">Submitted: {new Date(fb.submittedAt).toLocaleString()}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FeedbackList;
