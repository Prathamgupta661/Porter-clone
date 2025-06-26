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
      <div className="min-h-screen text-[#05060d] font-sans bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

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
