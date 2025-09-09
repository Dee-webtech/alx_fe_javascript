// Load quotes from localStorage if available
let quotes = JSON.parse(localStorage.getItem('quotes')) || [
  { text: "The journey of a thousand miles begins with one step.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
];

// Load last selected category from localStorage
let lastCategory = localStorage.getItem('lastCategory') || 'all';

// Save quotes array to localStorage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Display a random quote (optionally filtered)
function showRandomQuote() {
  const filteredQuotes = lastCategory === 'all'
    ? quotes
    : quotes.filter(q => q.category === lastCategory);

  if (filteredQuotes.length === 0) return; // nothing to display

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  document.getElementById('quoteDisplay').innerHTML = filteredQuotes[randomIndex].text;
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

// Add new quote and update categories
function addQuote() {
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');

  if (textInput.value && categoryInput.value) {
    quotes.push({ text: textInput.value, category: categoryInput.value });
    saveQuotes();
    populateCategories(); // update dropdown
    textInput.value = '';
    categoryInput.value = '';
    showRandomQuote();
  } else {
    alert("Please enter both quote and category!");
  }
}

// Populate categories dynamically
function populateCategories() {
  const dropdown = document.getElementById('categoryFilter');
  const categories = [...new Set(quotes.map(q => q.category))]; // unique categories

  // Clear old options except "All Categories"
  dropdown.innerHTML = '<option value="all">All Categories</option>';

  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    dropdown.appendChild(option);
  });

  // Restore last selected category
  dropdown.value = lastCategory;
}

// Filter quotes based on dropdown
function filterQuotes() {
  lastCategory = document.getElementById('categoryFilter').value;
  localStorage.setItem('lastCategory', lastCategory); // persist filter
  showRandomQuote();
}

// Export quotes to JSON
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
    populateCategories();
    alert('Quotes imported successfully!');
    showRandomQuote();
  };
  fileReader.readAsText(event.target.files[0]);
}

// Event listeners
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('exportBtn').addEventListener('click', exportToJson);
document.getElementById('importFile').addEventListener('change', importFromJsonFile);

// Initialize
createAddQuoteForm();
populateCategories();
showRandomQuote();
