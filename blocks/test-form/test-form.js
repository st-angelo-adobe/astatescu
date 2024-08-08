import { setLibs } from '../../scripts/utils.js';

const miloLibs = setLibs('/libs');

export default async function init(el) {
  const content = Array.from(el.querySelectorAll(':scope > div'));
  content.forEach((con) => con.classList.add('hide'));

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

  const { createTag } = await import(`${miloLibs}/utils/utils.js`);

  const container = createTag('div', { class: 'test-form-container' });
  const title = createTag('h3', { class: 'test-form-title' }, labels.title);

  const form = createTag('form', { class: 'test-form' });

  const firstName = createTag('div', { class: 'test-form-control', 'data-size': 6 });
  const firstNameLabel = createTag(
    'label',
    { class: 'test-form-label', for: 'firstName' },
    labels.firstName,
  );
  const firstNameInput = createTag('input', {
    class: 'test-form-input',
    name: 'firstName',
    required: true,
    size: 1,
  });
  firstName.append(firstNameLabel, firstNameInput);

  const lastName = createTag('div', { class: 'test-form-control', 'data-size': 6 });
  const lastNameLabel = createTag(
    'label',
    { class: 'test-form-label', for: 'lastName' },
    labels.lastName,
  );
  const lastNameInput = createTag('input', {
    class: 'test-form-input',
    name: 'lastName',
    required: true,
    size: 1,
  });
  lastName.append(lastNameLabel, lastNameInput);

  const dateOfBirth = createTag('div', { class: 'test-form-control' });

  const dateOfBirthLabel = createTag('label', { class: 'test-form-label' }, labels.dateOfBirth);
  const dateOfBirthInputs = createTag('div', { class: 'test-form-date-of-birth-container' });

  const day = createTag('div', { class: 'test-form-control fragment', 'data-size': 4 });
  const dayInput = createTag('select', { class: 'test-form-input', placeholder: labels.day });
  Array.from({ length: 31 }, (_, index) => index + 1).forEach((number) => {
    const optionTag = createTag(
      'option',
      { class: 'test-form-option', value: number },
      String(number).padStart(2, '0'),
    );
    dayInput.append(optionTag);
  });
  day.append(dayInput);

  const month = createTag('div', { class: 'test-form-control fragment', 'data-size': 4 });
  const monthInput = createTag('select', { class: 'test-form-input', placeholder: labels.month });
  Array.from({ length: 12 }, (_, index) => index + 1).forEach((number) => {
    const optionTag = createTag(
      'option',
      { class: 'test-form-option', value: number },
      String(number).padStart(2, '0'),
    );
    monthInput.append(optionTag);
  });
  month.append(monthInput);

  const year = createTag('div', { class: 'test-form-control fragment', 'data-size': 4 });
  const yearInput = createTag('select', { class: 'test-form-input', placeholder: labels.year });
  Array.from({ length: 50 }, (_, index) => index + 1975).forEach((number) => {
    const optionTag = createTag(
      'option',
      { class: 'test-form-option', value: number },
      String(number).padStart(2, '0'),
    );
    yearInput.append(optionTag);
  });
  year.append(yearInput);

  dateOfBirthInputs.append(day, month, year);
  dateOfBirth.append(dateOfBirthLabel, dateOfBirthInputs);

  const profession = createTag('div', { class: 'test-form-control' });
  const professionLabel = createTag(
    'label',
    { class: 'test-form-label', for: 'profession' },
    labels.profession,
  );
  const professionInput = createTag('select', { class: 'test-form-input', name: 'profession' });
  labels.professions.forEach((option) => {
    const optionTag = createTag('option', { class: 'test-form-option', value: option }, option);
    professionInput.append(optionTag);
  });
  profession.append(professionLabel, professionInput);

  const hasSwag = createTag('div', { class: 'test-form-control checkbox' });
  const hasSwagInput = createTag('input', {
    class: 'test-form-input',
    name: 'hasSwag',
    type: 'checkbox',
  });
  const hasSwagLabel = createTag(
    'label',
    { class: 'test-form-label', for: 'hasSwag' },
    labels.hasSwag,
  );
  hasSwag.append(hasSwagInput, hasSwagLabel);

  const separator = createTag('hr', { class: 'test-form-separator' });

  const disclaimer = createTag('p', { class: 'test-form-disclaimer' }, labels.disclaimer);

  const submit = createTag(
    'button',
    { class: 'test-form-submit con-button button-s fill outline' },
    labels.submit,
  );

  form.append(firstName, lastName, dateOfBirth, profession, hasSwag, separator, disclaimer, submit);

  container.append(title, form);

  el.append(container);
}
