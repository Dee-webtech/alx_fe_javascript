const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipes = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const getRecipeDetails = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};
