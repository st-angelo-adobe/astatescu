import { setLibs } from '../../scripts/utils.js';

const miloLibs = setLibs('/libs');

export default async function init(el) {
  const content = Array.from(el.querySelectorAll(':scope > div'));
  content.forEach((con) => con.classList.add('hide'));

  const { createTag } = await import(`${miloLibs}/utils/utils.js`);

  const getLabel = (row) => {
    const labelColumn = row.querySelector('div:nth-child(2)');
    const lis = [...labelColumn.querySelectorAll('li')];
    if (lis.length === 0) return labelColumn.textContent;
    return lis.map((li) => li.textContent);
  };

  const labels = {
    title: getLabel(content[0]),
    firstName: getLabel(content[1]),
    lastName: getLabel(content[2]),
    dateOfBirth: getLabel(content[3]),
    day: getLabel(content[4]),
    month: getLabel(content[5]),
    year: getLabel(content[6]),
    profession: getLabel(content[7]),
    professions: getLabel(content[8]),
    hasSwag: getLabel(content[9]),
    disclaimer: getLabel(content[10]),
    submit: getLabel(content[11]),
  };

  console.log(labels);

  const getNoProfitControl = (params) => {
    const {
      type, name, label, placeholder, required, options,
    } = params;
    const controlTag = createTag('div', { class: 'no-profit-control' });
    const labelTag = createTag('label', { class: 'no-profit-label', for: name }, label);
    let inputTag;
    if (type === 'select') {
      inputTag = createTag('select', { class: 'no-profit-input', name, placeholder, required });
      options.forEach((option) => {
        const optionTag = createTag(
          'option',
          { class: 'no-profit-option', value: option.value },
          option.label,
        );
        inputTag.append(optionTag);
      });
    } else {
      inputTag = createTag('input', {
        class: 'no-profit-input',
        type,
        name,
        placeholder,
        required,
      });
    }
    controlTag.append(labelTag, inputTag);
    return controlTag;
  };

  el.append('lol');
}

const getOrganizations = () => Promise.resolve([]);

//  #B1B1B1 - frame
//  #F5F5F5 - background
//  #D0D0D0 - placeholder
//  #393939 - text
