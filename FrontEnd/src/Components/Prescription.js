import React, { useState } from 'react';

const Prescribe = () => {
  const [prescription, setPrescription] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { user_id: userId, prescription };

    try {
      const response = await fetch('/api/prescribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Prescription submitted successfully');
      } else {
        alert('Error submitting prescription');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="text-2xl mb-4">Prescribe Medication</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">User ID:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
        />
        <label className="block mb-2">Prescription:</label>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
          placeholder="Enter prescription here"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Prescribe;
