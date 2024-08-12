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
    profession: getLabel(content[4]),
    professions: getLabel(content[5]),
    hasSwag: getLabel(content[6]),
    disclaimer: getLabel(content[7]),
    submit: getLabel(content[8]),
  };

  console.log(labels);

  const getNoProfitControl = (params) => {
    const {
      type, name, label, placeholder, required, options,
    } = params;
    const baseParams = { name, placeholder };
    if (required) baseParams.required = 'required';
    const controlTag = createTag('div', { class: 'no-profit-control' });
    const labelTag = createTag('label', { class: 'no-profit-label', for: name }, label);
    let inputTag;
    if (type === 'select') {
      inputTag = createTag('select', { class: 'no-profit-input', ...baseParams });
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
        ...baseParams,
      });
    }
    controlTag.append(labelTag, inputTag);
    return controlTag;
  };

  const containerTag = createTag('form', { class: 'no-profit-form' });

  const firstNameTag = getNoProfitControl({
    type: 'text',
    name: 'firstName',
    label: labels.firstName,
    placeholder: labels.firstName,
    required: true,
  });

  const lastNameTag = getNoProfitControl({
    type: 'text',
    name: 'lastName',
    label: labels.lastName,
    placeholder: labels.lastName,
    required: true,
  });

  const dateOfBirthTag = getNoProfitControl({
    type: 'date',
    name: 'dateOfBirth',
    label: labels.dateOfBirth,
    placeholder: labels.dateOfBirth,
    required: true,
  });

  const professionTag = getNoProfitControl({
    type: 'select',
    name: 'profession',
    label: labels.profession,
    placeholder: labels.profession,
    required: true,
    options: labels.professions.map((profession) => ({ label: profession, value: profession })),
  });

  const hasSwagTag = getNoProfitControl({
    type: 'checkbox',
    name: 'hasSwag',
    label: labels.hasSwag,
    placeholder: labels.hasSwag,
  });

  const submitTag = createTag('button', { class: 'no-profit-submit' }, labels.submit);

  containerTag.append(firstNameTag, lastNameTag, dateOfBirthTag, professionTag, hasSwagTag);

  el.append(containerTag);
}

const getOrganizations = () => Promise.resolve([]);

//  #B1B1B1 - frame
//  #F5F5F5 - background
//  #D0D0D0 - placeholder
//  #393939 - text
