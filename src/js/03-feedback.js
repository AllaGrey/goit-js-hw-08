import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedbackFormState = {};
const STORAGE_KEY = 'feedback-form-state';

initFeedbackFormState();

form.addEventListener('submit', throttle(onFormSubmit, 500));
form.addEventListener('input', throttle(onFormChange, 500));

function onFormSubmit(e) {
  e.preventDefault();

  if (e.target.email.value === '' || e.target.message.value === '') {
    return alert('Please, fill all fields!');
  } else {
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function onFormChange(e) {
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
}

function initFeedbackFormState() {
  let savedFeedbackFormState = localStorage.getItem(STORAGE_KEY);

  if (savedFeedbackFormState) {
    savedFeedbackFormState = JSON.parse(savedFeedbackFormState);
    form.elements.email.textContent = savedFeedbackFormState.email;
    form.elements.message.textContent = savedFeedbackFormState.message;
  }
}
