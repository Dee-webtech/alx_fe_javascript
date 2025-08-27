<div className="min-h-screen bg-white p-6">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6">What is in your kitchen?</h2>
  <SearchBar onSearch={handleSearch} />

  {loading && <p className="mt-4 text-gray-700">Loading...</p>}
  {error && <p className="mt-4 text-red-500">{error}</p>}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.idMeal} recipe={recipe} onView={onViewRecipe} />
    ))}
  </div>
</div>
