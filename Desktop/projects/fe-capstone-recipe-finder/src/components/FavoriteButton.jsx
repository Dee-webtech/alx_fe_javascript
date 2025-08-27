import React, { useState, useEffect } from "react";

function FavoriteButton({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.idMeal === recipe.idMeal));
  }, [recipe]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.idMeal !== recipe.idMeal);
    } else {
      updatedFavorites = [...favorites, recipe];
    }
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`mt-2 px-3 py-1 rounded ${
        isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-gray-300 hover:bg-gray-400"
      } text-white transition`}
    >
      {isFavorite ? "Remove Favorite" : "Add to Favorites"}
    </button>
  );
}

export default FavoriteButton;
