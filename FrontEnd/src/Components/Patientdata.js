import React, { useEffect, useState } from 'react';

const PastRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch('/api/patient-records');
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="text-2xl mb-4">Past Records</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border">User ID</th>
            <th className="py-2 border">Symptoms</th>
            <th className="py-2 border">Prescriptions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.user_id}>
              <td className="py-2 border">{record.user_id}</td>
              <td className="py-2 border">
                {record.user_symptoms.join(', ')}
              </td>
              <td className="py-2 border">
                {record.user_prescription.join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PastRecords;

