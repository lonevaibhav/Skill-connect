import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Choose Your Role</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/employer")}
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          I'm an Employer
        </button>
        <button
          onClick={() => navigate("/worker")}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          I'm a Worker
        </button>
      </div>
    </div>
  );
};

export default RoleSelect;
