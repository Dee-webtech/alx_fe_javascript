// Array of quotes (objects with text and category)
const quotes = [
    { text: "You want to achieve that goal? Start Now!", category: "Motivation" },
    { text: "Don't let yesterday take up too much of today.", category: "Inspiration" },
    { text: "It's not how far, it's how well.", category: "Wisdom" },
    { text: "Make sure you find joy in what you're doing, it will keep you motivated.", category: "Happiness" },
    { text: "Don't overthink it, you'll get there.", category: "Encouragement" }
];

// Get DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteDisplay.textContent = `"${quote.text}" - ${quote.category}`;
}

// Function to add a new quote
function addQuote(text, category) {
    quotes.push({ text, category });
    displayRandomQuote();
}

// Event listener for button
newQuoteBtn.addEventListener("click", displayRandomQuote);

// Show one quote on page load
displayRandomQuote();
s