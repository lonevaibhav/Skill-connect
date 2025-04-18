import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p>{job.description}</p>
      <p className="text-sm text-gray-600">{job.location}</p>
    </div>
  );
};

export default JobCard;
