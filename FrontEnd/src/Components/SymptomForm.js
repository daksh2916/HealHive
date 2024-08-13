import React, { useState } from 'react';

const SymptomsForm = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [userId, setUserId] = useState('');

  const symptoms = [
    'Fever',
    'Cough',
    'Shortness of Breath',
    'Fatigue',
    'Body Aches',
    'Headache',
    'Sore Throat',
    'Loss of Taste/Smell',
  ];

  const handleCheckboxChange = (symptom) => {
    setSelectedSymptoms((prevSelected) => {
      if (prevSelected.includes(symptom)) {
        return prevSelected.filter((s) => s !== symptom);
      } else {
        return [...prevSelected, symptom];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { user_id: userId, symptoms: selectedSymptoms };

    try {
      const response = await fetch('/api/add-symptoms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Symptoms submitted successfully');
        setSelectedSymptoms([]);
        setUserId('');
      } else {
        alert('Error submitting symptoms');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="text-2xl mb-4">Select Symptoms</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">User ID:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
          required
        />

        <fieldset className="mb-4">
          <legend className="text-xl mb-2">Select Symptoms:</legend>
          {symptoms.map((symptom) => (
            <div key={symptom} className="mb-2">
              <input
                type="checkbox"
                id={symptom}
                name={symptom}
                value={symptom}
                checked={selectedSymptoms.includes(symptom)}
                onChange={() => handleCheckboxChange(symptom)}
                className="mr-2"
              />
              <label htmlFor={symptom}>{symptom}</label>
            </div>
          ))}
        </fieldset>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SymptomsForm;
