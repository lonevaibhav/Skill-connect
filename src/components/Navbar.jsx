import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white flex justify-between">
    <Link to="/" className="font-bold text-xl">Skill Connect</Link>
    <div className="space-x-4">
      <Link to="/login">Login</Link>
      <Link to="/employer">Employer</Link>
      <Link to="/worker">Worker</Link>
    </div>
  </nav>
);

export default Navbar;
