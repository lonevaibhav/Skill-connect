// src/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';  // Importing auth from services/firebase
import { signOut } from 'firebase/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;  // Get the current authenticated user

  const handleLogout = async () => {
    try {
      await signOut(auth);  // Sign the user out
      navigate('/login');    // Redirect to login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">Welcome to the Dashboard</h2>
        
        {user ? (
          <div>
            <p className="text-lg">Hello, {user.displayName || user.email}!</p>
            <p className="mt-2">You are logged in as {user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 w-full p-3 bg-red-600 text-white rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-lg">No user is logged in. Please log in to access the dashboard.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
