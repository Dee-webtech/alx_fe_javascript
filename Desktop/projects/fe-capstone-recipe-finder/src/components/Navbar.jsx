import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Recipe Finder</h1>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">Favorites</a>
      </div>
    </nav>
  );
}

export default Navbar;
