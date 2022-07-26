const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let quote;

// Generate new quote
function generateQuote(data) {
  loading();
  quote = data[Math.floor(Math.random() * data.length)];

  // Check if author field is blank

  quote.author
    ? (author.textContent = quote.author)
    : (author.textContent = '- Unknown');

  quote.text.length > 120
    ? quoteText.classList.add('long-quote-text')
    : quoteText.classList.remove('long-quote-text');

  quoteText.textContent = quote.text;
  completed();
}

// Get quotes from API
async function getQuotesData() {
  loading();
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    generateQuote(data);
  } catch (error) {
    // Catch error here
  }
}

function tweetQuote() {
  // query string
  const tweetURL = `https://twitter.com/intent/tweet?text=${quote.text}
  - ${quote.author}`;

  window.open(tweetURL, '_blank');
}

// Loading
function loading() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

// Completed
function completed() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// On Click
newQuoteBtn.addEventListener('click', getQuotesData);
twitterBtn.addEventListener('click', tweetQuote);

// On load

getQuotesData();
