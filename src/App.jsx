import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <Navbar />

      <main className="w-full overflow-x-hidden">
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Contact />
      </main>

      <Footer />

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default App; 