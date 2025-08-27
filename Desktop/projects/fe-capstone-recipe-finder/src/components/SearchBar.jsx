import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-center items-center my-6 space-y-2 sm:space-y-0 sm:space-x-2"
    >
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients, comma separated"
        className="border p-2 rounded w-72 sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
