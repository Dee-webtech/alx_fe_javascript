// Quotes array
const quotes = [
  { text: "You want to achieve that goal? Start Now!", category: "Motivation" },
  { text: "Don't let yesterday take up too much of today.", category: "Inspiration" },
  { text: "Do one thing every day that scares you.", category: "Courage" },
  { text: "It's not how far, it's how well.", category: "Focus" },
  { text: "Make sure you find joy in what you're doing, it will keep you motivated.", category: "Happiness" },
  { text: "Don't overthink it, you'll get there.", category: "Encouragement" }
];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const addQuoteBtn = document.getElementById("addQuoteBtn");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");

// Show a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.textContent = "No quotes available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `<p>"${quote.text}"</p><small>— ${quote.category}</small>`;
}

// Add a new quote
function addQuote() {
  const text = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim();

  if (text && category) {
    quotes.push({ text, category });
    newQuoteText.value = "";
    newQuoteCategory.value = "";
    showRandomQuote();
    localStorage.setItem('quotes', JSON.stringify(quotes));
  } else {
    alert("Please enter both a quote and a category.");
  }
}

// Event listeners
newQuoteBtn.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);

// Load saved quotes from localStorage
const savedQuotes = JSON.parse(localStorage.getItem('quotes'));
if (savedQuotes) quotes.push(...savedQuotes);

// Display initial quote
showRandomQuote();
