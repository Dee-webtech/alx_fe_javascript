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

// Simulate fetching server data
async function fetchServerQuotes() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // mock API
    const data = await response.json();
    // Transform mock data into quote objects
    const serverQuotes = data.slice(0, 5).map(post => ({
      text: post.title,
      category: "Server",
    }));
    return serverQuotes;
  } catch (error) {
    console.error("Error fetching server quotes:", error);
    return [];
  }
}

// Add new quote dynamically
function addQuote() {
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');
  const text = textInput.value.trim();
  const category = categoryInput.value.trim() || "General";

  if (!text) return alert("Quote text cannot be empty");

  quotes.push({ text, category });
  saveQuotes();
  populateCategories();
  showRandomQuote();

  textInput.value = '';
  categoryInput.value = '';
}

// Export quotes to JSON file
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "quotes.json";
  a.click();
  URL.revokeObjectURL(url);
}

// Import quotes from JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(e) {
    const importedQuotes = JSON.parse(e.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    populateCategories();
    showRandomQuote();
    alert("Quotes imported successfully!");
  };
  fileReader.readAsText(event.target.files[0]);
}

// Sync local quotes with server and handle conflicts
async function syncWithServer() {
  const serverQuotes = await fetchServerQuotes();
  let updated = false;

  serverQuotes.forEach(serverQuote => {
    const exists = quotes.some(q => q.text === serverQuote.text);
    if (!exists) {
      quotes.push(serverQuote);
      updated = true;
    }
  });

  if (updated) {
    saveQuotes();
    populateCategories();
    showRandomQuote();
    notifyUser("Quotes updated from server!");
  }
}

// Simple notification
function notifyUser(message) {
  let notification = document.getElementById('notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'notification';
    notification.style.position = 'fixed';
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.padding = '10px';
    notification.style.backgroundColor = '#f0ad4e';
    notification.style.color = '#fff';
    notification.style.borderRadius = '5px';
    document.body.appendChild(notification);
  }
  notification.textContent = message;
  setTimeout(() => { notification.textContent = ''; }, 5000);
}

// Event listener for "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Initialize
populateCategories();
showRandomQuote();
setInterval(syncWithServer, 30000); // Sync every 30 seconds

// Link import/export buttons
document.getElementById('importFile').addEventListener('change', importFromJsonFile);
document.getElementById('exportBtn').addEventListener('click', exportToJsonFile);
