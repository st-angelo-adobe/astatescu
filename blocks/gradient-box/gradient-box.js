export default function init(el) {
  el.getElementsByTagName('div')[0].classList.add('hide');
  const gradient = el.querySelector('div > div').textContent;
  el.style.background = gradient;
}
