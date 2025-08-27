<div
  className="min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-white p-6"
  style={{ backgroundImage: "url('/assets/landing-bg.jpg')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  <div className="relative z-10 text-center space-y-6">
    <h1 className="text-4xl sm:text-5xl font-bold">Recipe Finder</h1>
    <p className="text-lg sm:text-xl">Find recipes with what you already have</p>
    <button
      onClick={onStart}
      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg font-semibold transition transform hover:scale-105"
    >
      Start Cooking
    </button>
  </div>
</div>
