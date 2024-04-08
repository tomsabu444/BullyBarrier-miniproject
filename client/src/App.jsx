import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //Routing

//Pages
import Sign_In from "./pages/Sign_In";
import Sign_Up from "./pages/Sign_Up";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Sign_In />} />
          <Route path="/sign-up" element={<Sign_Up />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
