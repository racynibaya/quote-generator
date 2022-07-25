const author = document.querySelector('.quote-author');
const quote = document.querySelector('.quote-text');

const generate = document.getElementById('new-quote');

// Get quotes from API
async function getQuotes() {
  const quotes = await fetch('https://type.fit/api/quotes');
  const data = await quotes.json();

  const obj = data[Math.floor(Math.random() * data.length)];

  console.log(obj);
  quote.children[1].textContent = obj.text;
  author.children[0].textContent = obj.author;
}

generate.addEventListener('click', getQuotes);
