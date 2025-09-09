// Initial quotes array
let quotes = [
    { text: "The journey of a thousand miles begins with one step.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = quotes[randomIndex].text; // innerHTML required
}

// Function to dynamically create the add-quote form
function createAddQuoteForm() {
    const formContainer = document.createElement('div');

    const textInput = document.createElement('input');
    textInput.id = 'newQuoteText';
    textInput.placeholder = 'Enter a new quote';

    const categoryInput = document.createElement('input');
    categoryInput.id = 'newQuoteCategory';
    categoryInput.placeholder = 'Enter quote category';

    const addButton = document.createElement('button');
    addButton.id = 'addQuoteBtn';
    addButton.textContent = 'Add Quote';
    addButton.addEventListener('click', addQuote);

    formContainer.appendChild(textInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);

    document.body.appendChild(formContainer);
}

// Function to add a new quote
function addQuote() {
    const textInput = document.getElementById('newQuoteText');
    const categoryInput = document.getElementById('newQuoteCategory');

    if (textInput.value && categoryInput.value) {
        quotes.push({ text: textInput.value, category: categoryInput.value });
        textInput.value = '';
        categoryInput.value = '';
        showRandomQuote(); // call the correct function
    } else {
        alert("Please enter both quote and category!");
    }
}

// Event listener for the “Show New Quote” button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Create the form dynamically
createAddQuoteForm();

// Show a quote on page load
showRandomQuote();
