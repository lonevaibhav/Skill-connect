import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Skill Connect
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">Login</Link>
          <Link to="/employer" className="text-gray-700 hover:text-blue-500 font-medium">Employer</Link>
          <Link to="/worker" className="text-gray-700 hover:text-blue-500 font-medium">Worker</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav className="bg-blue-600 p-4 text-white flex justify-between">
//     <Link to="/" className="font-bold text-xl">Skill Connect</Link>
//     <div className="space-x-4">
//       <Link to="/login">Login</Link>
//       <Link to="/employer">Employer</Link>
//       <Link to="/worker">Worker</Link>
//     </div>
//   </nav>
// );

// export default Navbar;
