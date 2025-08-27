import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
