// Quotes array with text and category properties
const quotes = [
  { text: "You want to achieve that goal? Start Now!", category: "Motivation" },
  { text: "Failure is simply the opportunity to begin again.", category: "Inspiration" },
  { text: "Do one thing every day that scares you.", category: "Courage" }
];

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `
    <p>"${randomQuote.text}"</p>
    <small>— ${randomQuote.category}</small>
  `;
}

// Function to add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (newText && newCategory) {
    // Add to array
    quotes.push({ text: newText, category: newCategory });

    // Clear inputs
    textInput.value = "";
    categoryInput.value = "";

    // Show the newly added quote immediately
    displayRandomQuote();
  } else {
    alert("Please enter both quote text and category.");
  }
}

// Event listener for "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Show a quote on initial load
displayRandomQuote();
