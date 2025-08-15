// Array of quotes
const quotes = [
    "You want to achieve that goal? Start Now!",
    "Don't let yesterday take up too much of today.",
    "It's not how far, it's how well.",
    "Make sure you find joy in what you're doing, it will keep you motivated.",
    "Don't overthink it, you'll get there."
];

// Get DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");

// Function to show a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

// Event listener
newQuoteBtn.addEventListener("click", showRandomQuote);

// Show one quote on page load
showRandomQuote();
