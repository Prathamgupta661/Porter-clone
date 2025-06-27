import React from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SupportPage from "./pages/Support";
import Enterprise from "./pages/Enterprise";
import DriverPartners from "./pages/DriverPartners";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-[#05060d] font-sans">
        <div className="relative z-10">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/packers-movers" element={<DriverPartners />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
