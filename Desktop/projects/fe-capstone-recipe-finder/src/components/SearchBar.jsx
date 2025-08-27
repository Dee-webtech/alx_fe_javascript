import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2"
    >
      <input
  type="text"
  placeholder="Enter a dish name"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="border rounded p-2 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
/>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
