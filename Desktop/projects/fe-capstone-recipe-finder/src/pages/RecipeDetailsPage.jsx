<div className="min-h-screen bg-white p-6">
  <button
    onClick={onBack}
    className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
  >
    ← Back
  </button>

  <div className="flex flex-col md:flex-row md:space-x-6">
    <img
      src={details.strMealThumb}
      alt={details.strMeal}
      className="rounded mb-4 md:mb-0 w-full md:w-1/2 object-cover"
    />

    <div className="flex-1">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{details.strMeal}</h1>
        <FavoriteButton recipe={details} />
      </div>

      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        {ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <p className="mb-4 whitespace-pre-line">{details.strInstructions}</p>

      {details.strYoutube && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Video:</h2>
          <iframe
            title="Recipe Video"
            src={`https://www.youtube.com/embed/${details.strYoutube.split("v=")[1]}`}
            className="w-full h-64 md:h-96 rounded"
            allowFullScreen
          />
        </div>
      )}

      {details.strSource && (
        <div className="mt-4">
          <a
            href={details.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            View full recipe source
          </a>
        </div>
      )}
    </div>
  </div>
</div>
