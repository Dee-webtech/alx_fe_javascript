// Initial quotes array
let quotes = [
    { text: "The journey of a thousand miles begins with one step.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = quotes[randomIndex].text; // <-- innerHTML is required
}

// Function to add a new quote
function addQuote() {
    const textInput = document.getElementById('newQuoteText');
    const categoryInput = document.getElementById('newQuoteCategory');

    if (textInput.value && categoryInput.value) {
        quotes.push({ text: textInput.value, category: categoryInput.value });
        textInput.value = '';
        categoryInput.value = '';
        displayRandomQuote(); // <-- use the correct function name
    } else {
        alert("Please enter both quote and category!");
    }
}

// Event listeners
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click', addQuote);

// Show a quote on page load
displayRandomQuote();
