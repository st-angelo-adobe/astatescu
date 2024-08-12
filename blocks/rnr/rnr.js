import { setLibs } from '../../scripts/utils.js';

const miloLibs = setLibs('/libs');

export default async function init(el) {
  const { createTag } = await import(`${miloLibs}/utils/utils.js`);

  const getRatingStar = (value) => {
    const inputTag = createTag('input', { class: 'rating-star', value, name: 'rating' });
    return inputTag;
  };

  Array.from({ length: 12 }, (_, index) => index + 1).forEach((number) => {
    const star = getRatingStar(number);
    el.append(star);
  });
}
