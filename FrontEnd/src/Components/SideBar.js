import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Assuming token is stored in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      setUserRole(decoded.role); // Replace 'role' with the correct property
    }
  }, []);

  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex flex-col p-4">
      <Link to="/home" className="mb-4 hover:bg-gray-700 p-2 rounded">Home</Link>
      {userRole === 'doctor' && (
        <>
          <Link to="/past-records" className="mb-4 hover:bg-gray-700 p-2 rounded">Past Records</Link>
          <Link to="/view-reports" className="mb-4 hover:bg-gray-700 p-2 rounded">View Reports</Link>
          <Link to="/symptoms" className="mb-4 hover:bg-gray-700 p-2 rounded">Symptoms</Link>
          <Link to="/prescribe" className="mb-4 hover:bg-gray-700 p-2 rounded">Prescribe</Link>
        </>
      )}
      {userRole === 'patient' && (
        <>
          <Link to="/previous-records" className="mb-4 hover:bg-gray-700 p-2 rounded">Previous Records</Link>
          <Link to="/add-symptoms" className="mb-4 hover:bg-gray-700 p-2 rounded">Add Symptoms</Link>
          <Link to="/view-report" className="mb-4 hover:bg-gray-700 p-2 rounded">View Report</Link>
          <Link to="/view-prescription" className="mb-4 hover:bg-gray-700 p-2 rounded">View Prescription</Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;
