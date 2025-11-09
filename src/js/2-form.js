let formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onText);
form.addEventListener('submit', handlerSubmit);

function onText(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateText() {
  const message = localStorage.getItem(STORAGE_KEY);
  if (message) {
    const parsedData = JSON.parse(message);
     formData.email = parsedData.email || '';
     formData.message = parsedData.message || '';
    document.querySelector('input[name="email"]').value =
      parsedData.email || '';
    document.querySelector('textarea[name="message"]').value =
      parsedData.message || '';
  }
}

populateText();

function handlerSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);

    event.currentTarget.reset();

    formData = { email: '', message: '' };
  }
}