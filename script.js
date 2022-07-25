const author = document.querySelector('.quote-author');
const quoteText = document.querySelector('.quote-text');

const generate = document.getElementById('new-quote');

// Get quotes from API
async function getQuotes() {
  try {
    const response = await fetch('https://type.fit/api/quotes');

    const quote = await response.json();

    const obj = quote[Math.floor(Math.random() * quote.length)];

    quoteText.children[1].textContent = obj.text;
    author.children[0].textContent = obj.author;
  } catch (error) {
    // Catch error here
  }
}
getQuotes();
generate.addEventListener('click', getQuotes);
