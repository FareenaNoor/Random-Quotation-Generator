document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    const saveQuoteBtn = document.getElementById('saveQuoteBtn');
    const logoutBtn = document.getElementById('logoutBtn');
  
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `- ${data.author}`;
      } catch (error) {
        quoteText.textContent = 'Failed to fetch quote';
        quoteAuthor.textContent = '';
      }
    };
  
    const displayQuote = async () => {
      await fetchQuote();
    };
  
    newQuoteBtn.addEventListener('click', displayQuote);
  
    saveQuoteBtn.addEventListener('click', () => {
      const currentQuote = {
        text: quoteText.textContent,
        author: quoteAuthor.textContent
      };
  
      let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
      savedQuotes.push(currentQuote);
      localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
  
      alert('Quote saved!');
    });
  
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      alert('Logged out successfully!');
      window.location.href = 'index.html';
    });
  
    displayQuote();
  });
  
