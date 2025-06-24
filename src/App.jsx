import React from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SupportPage from "./pages/Support";
import Enterprise from "./pages/Enterprise";
import PackersMovers from "./pages/PackersMovers";
import DriverPartners from "./pages/DriverPartners";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#f2f4f6] min-h-screen text-[#05060d] font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/packers-movers" element={<DriverPartners />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
