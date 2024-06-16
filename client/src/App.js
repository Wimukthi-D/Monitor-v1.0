import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Mainpage from './Pages/mainpage';
import Loginpage from './Pages/login';

const App = () => {

  return (
    <Router>
      <div>
        
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/dashboard" element={<Mainpage />} />

          </Routes>
        
      </div>
    </Router>
  );
};

export default App;
