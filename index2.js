const body = document.querySelector('body');
const button = document.querySelectorAll('.button');

button.forEach((btn) => {
  btn.addEventListener('click', () => {
    body.style.backgroundColor = btn.id;
  });
});
