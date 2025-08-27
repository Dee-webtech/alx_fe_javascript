import React from "react";

function RecipeCard({ recipe, onView }) {
  return (
    <div className="border rounded shadow p-4 m-2 bg-white flex flex-col">
      <img src={recipe.image} alt={recipe.title} className="rounded mb-2" />
      <h2 className="text-xl font-bold mb-1">{recipe.title}</h2>
      <p className="text-gray-600 mb-2">{recipe.description || "Delicious recipe!"}</p>
      <button
        onClick={() => onView(recipe)}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View Details
      </button>
    </div>
  );
}

export default RecipeCard;
