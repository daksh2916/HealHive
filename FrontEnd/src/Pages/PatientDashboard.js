import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ userType }) => {
  const doctorOptions = [
    { name: 'Past Records', path: '/past-records' },
    { name: 'View Reports', path: '/view-reports' },
    { name: 'Symptoms', path: '/symptoms' },
    { name: 'Prescribe', path: '/prescribe' },
    { name: 'Home', path: '/' },
  ];

  const patientOptions = [
    { name: 'Previous Records', path: '/previous-records' },
    { name: 'Add Symptoms', path: '/add-symptoms' },
    { name: 'View Report', path: '/view-report' },
    { name: 'View Prescription', path: '/view-prescription' },
    { name: 'Home', path: '/' },
  ];

  const menuOptions = userType === 'doctor' ? doctorOptions : patientOptions;

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-xl mb-4">Dashboard</h2>
      <ul>
        {menuOptions.map((option) => (
          <li key={option.name} className="mb-2">
            <Link to={option.path} className="hover:text-blue-400">
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
