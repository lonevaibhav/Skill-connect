import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployerDashboard from "./pages/EmployerDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/worker" element={<WorkerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


/*export default App;
function App() {
  return (
    <div className="bg-blue-500 text-white text-3xl p-4">
      Hello world, Tailwind is working!
    </div>
  );
}

export default App;*/

