import React from "react";
import JobCard from "../components/JobCard";

const WorkerDashboard = () => {
  const jobs = [
    {
      title: "House Painting",
      description: "Paint a 2BHK flat with premium colors.",
      location: "Lucknow",
    },
    {
      title: "Furniture Repair",
      description: "Fix a broken dining chair and table.",
      location: "Chennai",
    },
    {
      title: "Electric Work",
      description: "Install ceiling fans and LED lights.",
      location: "Delhi",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Available Jobs</h1>
      <p className="mb-6 text-gray-600">
        Browse and apply for jobs that match your skills.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, idx) => (
          <JobCard key={idx} job={job} />
        ))}
      </div>
    </div>
  );
};

export default WorkerDashboard;

// import React from "react";
// import JobCard from "../components/JobCard";

// const WorkerDashboard = () => {
//   const jobs = [
//     { title: "House Painting", description: "Paint a 2BHK flat", location: "Lucknow" },
//     { title: "Furniture Repair", description: "Fix a broken chair", location: "Chennai" }
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Worker Dashboard</h1>
//       <p className="mb-6">Browse jobs and apply (to be implemented).</p>
//       {jobs.map((job, idx) => (
//         <JobCard key={idx} job={job} />
//       ))}
//     </div>
//   );
// };

// export default WorkerDashboard;
