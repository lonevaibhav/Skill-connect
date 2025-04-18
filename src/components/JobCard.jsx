import React from "react";

const JobCard = ({ job }) => (
  <div className="border p-4 mb-4 rounded shadow-md">
    <h2 className="text-xl font-semibold">{job.title}</h2>
    <p>{job.description}</p>
    <p className="text-gray-500">Location: {job.location}</p>
  </div>
);

export default JobCard;
