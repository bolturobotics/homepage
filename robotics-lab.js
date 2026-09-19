const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.topbar nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

document.querySelector('.guide-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const toast = document.querySelector('.toast');
  toast.classList.add('show');
  event.currentTarget.reset();
  window.setTimeout(() => toast.classList.remove('show'), 3500);
});
