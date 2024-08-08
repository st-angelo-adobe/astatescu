import { getLibs } from './utils.js';

export default async function init() {
  const { createTag, loadBlock } = await import(`${getLibs()}/utils/utils.js`);

  const toHelloListener = async () => {
    const toHello = createTag('div', { class: 'to-hello' });
    await loadBlock(toHello);
  };

  const sk = document.querySelector('helix-sidekick');
  sk.addEventListener('custom:to-hello', toHelloListener);
}
