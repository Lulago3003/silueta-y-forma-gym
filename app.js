const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu(returnFocus = false) {
  navigation.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
  if (returnFocus) toggle.focus();
}

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('is-open', open);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.header')) closeMenu();
});

window.matchMedia('(min-width: 801px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const photoDialog = document.querySelector('.photo-dialog');
const enlargedPhoto = photoDialog.querySelector('img');
const photoCaption = photoDialog.querySelector('p');
let photoTrigger = null;

document.querySelectorAll('[data-photo]').forEach((button) => {
  button.addEventListener('click', () => {
    const original = button.querySelector('img');
    photoTrigger = button;
    enlargedPhoto.src = button.dataset.photo;
    enlargedPhoto.alt = original.alt;
    photoCaption.textContent = original.alt;
    photoDialog.showModal();
  });
});

photoDialog.querySelector('.photo-close').addEventListener('click', () => photoDialog.close());
photoDialog.addEventListener('click', (event) => {
  if (event.target === photoDialog) {
    const bounds = photoDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) photoDialog.close();
  }
});
photoDialog.addEventListener('close', () => photoTrigger?.focus());
