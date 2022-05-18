import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Dashboard from "./views/Dashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
