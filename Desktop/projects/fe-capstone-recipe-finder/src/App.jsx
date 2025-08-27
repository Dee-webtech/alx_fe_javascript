import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleStart = () => setCurrentPage("main");
  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentPage("details");
  };
  const handleBack = () => setCurrentPage("main");

  return (
    <>
      {currentPage === "landing" && <LandingPage onStart={handleStart} />}
      {currentPage === "main" && <MainPage onViewRecipe={handleViewRecipe} />}
      {currentPage === "details" && (
        <RecipeDetailsPage recipe={selectedRecipe} onBack={handleBack} />
      )}
    </>
  );
}

export default App;
