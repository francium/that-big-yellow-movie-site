// DOMContentLoaded is sufficient here, we don't need to wait for resources,
// just HTML
document.addEventListener('DOMContentLoaded', () => {
  const footerDateEl = document.querySelector('.Footer > .date');
  const str = footerDateEl.innerText;
  const date = new Date(str);
  footerDateEl.innerText = date.toLocaleString();
});
