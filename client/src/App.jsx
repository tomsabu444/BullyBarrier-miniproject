import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //Routing

import ProtectedRoute from "./utils/ProtectedRoute";
//Pages
import Sign_In from "./pages/Sign_In";
import Sign_Up from "./pages/Sign_Up";
import Home from "./pages/Home";
import Team from "./pages/Team";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<Sign_In />} />
        <Route path="/sign-up" element={<Sign_Up />} />
        <Route path="/team-member" element={<Team />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
