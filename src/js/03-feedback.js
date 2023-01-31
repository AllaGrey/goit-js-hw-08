import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formObject = {
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  form: document.querySelector('.feedback-form'),
};

const feedbackFormState = {};

initFeedbackFormState();

formObject.form.addEventListener('submit', onFormSubmit);
formObject.form.addEventListener('input', throttle(onFormChange, 500));

function onFormChange(e) {
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
  console.log(feedbackFormState[e.target.name]);
}

function initFeedbackFormState() {
  let savedFeedbackFormState = localStorage.getItem(STORAGE_KEY);

  if (savedFeedbackFormState) {
    savedFeedbackFormState = JSON.parse(savedFeedbackFormState);
    formObject.email.value = savedFeedbackFormState.email;
    formObject.message.value = savedFeedbackFormState.message;
    console.log(feedbackFormState);
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  if (e.target.email.value === '' || e.target.message.value === '') {
    return alert('Please, fill all fields!');
  } else {
    console.log(feedbackFormState);

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}
