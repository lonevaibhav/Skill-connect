import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./component/pages/Login";
import RoleSelect from "./component/pages/RoleSelect";
import EmployerDashboard from "./component/pages/EmployerDashboard";
import WorkerDashboard from "./component/pages/WorkerDashboard";

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
