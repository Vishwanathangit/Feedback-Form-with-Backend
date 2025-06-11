import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white shadow-md p-6 rounded-lg text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Form Submitted Successfully!</h1>
        <p className="mb-6">Thank you for your feedback.</p>
        <Link
          to="/"
          className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
