import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import RoleSelect from "./pages/RoleSelect";
import EmployerDashboard from "./pages/EmployerDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/worker" element={<WorkerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
