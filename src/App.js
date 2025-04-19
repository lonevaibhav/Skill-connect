
 //src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';  // Import auth from services/firebase
import Login from './pages/Login';  // Import Login component
import Dashboard from './pages/Dashboard';  // Import Dashboard component
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {!user ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/dashboard" element={<Dashboard />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;

//new code
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import EmployerDashboard from "./pages/EmployerDashboard";
// import WorkerDashboard from "./pages/WorkerDashboard";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">
//         <Navbar />
//         <main className="max-w-6xl mx-auto p-6">
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/employer" element={<EmployerDashboard />} />
//             <Route path="/worker" element={<WorkerDashboard />} />
//           </Routes>
//         </main>
//       </div>
//      </Router>
//    );
// }
//  export default App;

/*import React from "react";
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

