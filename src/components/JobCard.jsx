import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-4 hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-1">{job.description}</p>
      <p className="text-sm text-gray-500">📍 {job.location}</p>
    </div>
  );
};

export default JobCard;

// import React from "react";

// const JobCard = ({ job }) => (
//   <div className="border p-4 mb-4 rounded shadow-md">
//     <h2 className="text-xl font-semibold">{job.title}</h2>
//     <p>{job.description}</p>
//     <p className="text-gray-500">Location: {job.location}</p>
//   </div>
// );

// export default JobCard;
