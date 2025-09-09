// Load quotes from localStorage if available
let quotes = JSON.parse(localStorage.getItem('quotes')) || [
  { text: "The journey of a thousand miles begins with one step.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
];

// Track selected category
let selectedCategory = localStorage.getItem('selectedCategory') || 'all';

// Save quotes array to localStorage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Display a random quote based on selectedCategory
function showRandomQuote() {
  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  if (filteredQuotes.length === 0) return; // nothing to display

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  document.getElementById('quoteDisplay').innerHTML = filteredQuotes[randomIndex].text;
}

// Filter quotes when dropdown changes
function filterQuotes() {
  selectedCategory = document.getElementById('categoryFilter').value;
  localStorage.setItem('selectedCategory', selectedCategory);
  showRandomQuote();
}

// Populate categories dynamically
function populateCategories() {
  const dropdown = document.getElementById('categoryFilter');
  const categories = [...new Set(quotes.map(q => q.category))]; // unique categories

  dropdown.innerHTML = '<option value="all">All Categories</option>';
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    dropdown.appendChild(option);
  });

  dropdown.value = selectedCategory; // restore last selected
}
