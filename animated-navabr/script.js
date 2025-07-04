const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const searchToggle = document.getElementById('search-toggle');
const searchBar = document.getElementById('search-bar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('active');
});

searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('active');
});
