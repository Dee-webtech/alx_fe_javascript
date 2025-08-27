import React from "react";
import FavoriteButton from "./FavoriteButton";

function RecipeCard({ recipe, onView }) {
  return (
    <div
      className="border rounded shadow p-4 bg-white flex flex-col hover:shadow-lg hover:scale-105 transform transition duration-300"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded mb-2 object-cover h-48 w-full"
      />
      <h2 className="text-xl font-bold mb-1">{recipe.strMeal}</h2>
      <p className="text-gray-600 mb-2">{recipe.strCategory} | {recipe.strArea}</p>
      
      <div className="mt-auto flex flex-col space-y-2">
        <button
          onClick={() => onView(recipe)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </button>

        {/* Favorite button */}
        <FavoriteButton recipe={recipe} />
      </div>
    </div>
  );
}

export default RecipeCard;
