import React from "react";
import JobCard from "../components/JobCard";

const WorkerDashboard = () => {
  const jobs = [
    { title: "House Painting", description: "Paint a 2BHK flat", location: "Lucknow" },
    { title: "Furniture Repair", description: "Fix a broken chair", location: "Chennai" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Worker Dashboard</h1>
      <p className="mb-6">Browse jobs and apply (to be implemented).</p>
      {jobs.map((job, idx) => (
        <JobCard key={idx} job={job} />
      ))}
    </div>
  );
};

export default WorkerDashboard;
