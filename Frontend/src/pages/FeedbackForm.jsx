import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedback: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, rating, feedback } = formData;

    if (!name || !email || !rating || !feedback) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.post("https://feedback-form-with-backend.onrender.com/api/feedback", formData);
      setError('');
      navigate('/success'); // Redirect to success page
    } catch (err) {
      setError("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-4'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center text-indigo-600 mb-6'>Feedback Form</h2>

        {error && (
          <p className='text-red-500 mb-4 text-center'>{error}</p>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="rating"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">Rate us (1-5)</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>

          <textarea
            name="feedback"
            placeholder="Your Feedback"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
