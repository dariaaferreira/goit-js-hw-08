import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const feedbackFormEl = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

feedbackFormEl.addEventListener('submit', onFormSubmit);
feedbackFormEl.addEventListener('input', throttle(onFormInput, 500));

onFormOutput();

function onFormSubmit (evt) {
    evt.preventDefault();
    console.log(formData);
    
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput (evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormOutput () {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(savedMessage) {
        input.value = savedMessage.email;
        formData.email = savedMessage.email;
        
        textarea.value = savedMessage.message;
        formData.message = savedMessage.message;
    }
}