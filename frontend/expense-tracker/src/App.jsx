import React from "react";

import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";

const App = () => {
   return (
      <div>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/dashboard" element={<Home />} />
            </Routes>
         </Router>
      </div>
   );
};

export default App;
