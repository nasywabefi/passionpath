// script.js

// Example to add interactivity (e.g., selecting program cards)
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`You selected the ${card.textContent} program.`);
  });
});
