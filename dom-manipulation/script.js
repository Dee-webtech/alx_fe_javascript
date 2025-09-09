let quotes = JSON.parse(localStorage.getItem('quotes')) || [
  { text: "The journey of a thousand miles begins with one step.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
];

// Save quotes array to localStorage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = quotes[randomIndex].text;
  sessionStorage.setItem('lastQuote', JSON.stringify(quotes[randomIndex])); // optional session storage
}

// Dynamically create add-quote form
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

// Add new quote to array and update localStorage
function addQuote() {
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');

  if (textInput.value && categoryInput.value) {
    quotes.push({ text: textInput.value, category: categoryInput.value });
    saveQuotes();
    textInput.value = '';
    categoryInput.value = '';
    showRandomQuote();
  } else {
    alert("Please enter both quote and category!");
  }
}

// Export quotes to JSON file
function exportToJson() {
  const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'quotes.json';
  link.click();
  URL.revokeObjectURL(url);
}

// Import quotes from JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
    showRandomQuote();
  };
  fileReader.readAsText(event.target.files[0]);
}

// Event listener for “Show New Quote” button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Event listeners for import/export buttons
document.getElementById('exportBtn').addEventListener('click', exportToJson);
document.getElementById('importFile').addEventListener('change', importFromJsonFile);

// Initialize
createAddQuoteForm();
showRandomQuote();
