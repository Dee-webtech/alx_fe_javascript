/** Dynamic Quote Generator with localStorage persistence **/

const STORAGE_KEY = 'quotes_v1';

const defaultQuotes = [
  { text: "Believe in yourself!", category: "Motivation" },
  { text: "Life is short, smile while you still have teeth.", category: "Humor" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" }
];

function loadQuotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [...defaultQuotes];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [...defaultQuotes];
    // sanitize
    return parsed
      .filter(q => q && typeof q.text === 'string' && typeof q.category === 'string')
      .map(q => ({ text: q.text.trim(), category: q.category.trim() }))
      .filter(q => q.text && q.category);
  } catch (e) {
    console.warn("Failed to load quotes from storage, using defaults.", e);
    return [...defaultQuotes];
  }
}

function saveQuotes(quotes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes));
}

let quotes = loadQuotes();

function showRandomQuote() {
  const display = document.getElementById('quoteDisplay');
  if (!quotes.length) {
    display.textContent = "No quotes yet. Add one below!";
    return;
  }
  const idx = Math.floor(Math.random() * quotes.length);
  const q = quotes[idx];

  display.innerHTML = "";
  const p = document.createElement('p');
  p.textContent = `"${q.text}"`;
  const small = document.createElement('small');
  small.textContent = `— ${q.category}`;

  display.appendChild(p);
  display.appendChild(small);
}

function addQuote() {
  const textEl = document.getElementById('newQuoteText');
  const catEl = document.getElementById('newQuoteCategory');
  const addBtn = document.getElementById('addQuoteBtn');

  const text = textEl.value.trim();
  const category = catEl.value.trim();

  if (!text || !category) {
    alert("Please enter both a quote and a category.");
    return;
  }

  // Guard against double-click spam
  addBtn.disabled = true;

  quotes.push({ text, category });
  saveQuotes(quotes);

  textEl.value = "";
  catEl.value = "";

  showRandomQuote();
  addBtn.disabled = false;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  showRandomQuote();
});
