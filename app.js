// Sidebarni yopish va ochish
const sidebar = document.querySelector('.sidebar');
const btn = document.querySelector('.header-btn');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Sahifa yuqorisiga qaytish
const toTopButton = document.querySelector('.btn');

toTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});