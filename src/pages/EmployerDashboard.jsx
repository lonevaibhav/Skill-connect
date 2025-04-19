import React from "react";
import JobCard from "../components/JobCard";

const EmployerDashboard = () => {
  const jobs = [
    { title: "Plumber Needed", description: "Fix pipes at office", location: "Delhi" },
    { title: "Electrician", description: "Wiring work", location: "Mumbai" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Employer Dashboard</h1>
      <p className="text-gray-600 mb-6">Post jobs and review applicants (coming soon).</p>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default EmployerDashboard;

// import React from "react";
// import JobCard from "../components/JobCard";

// const EmployerDashboard = () => {
//   const sampleJobs = [
//     { title: "Plumber Needed", description: "Fix pipes at office", location: "Delhi" },
//     { title: "Electrician", description: "Wiring work", location: "Mumbai" }
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Employer Dashboard</h1>
//       <p className="mb-6">Post jobs and review applicants (to be implemented).</p>
//       {sampleJobs.map((job, idx) => (
//         <JobCard key={idx} job={job} />
//       ))}
//     </div>
//   );
// };

// export default EmployerDashboard;
