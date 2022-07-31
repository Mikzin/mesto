export {
  openPopup,
  popupImage,
  clickHandler,
  popupModalImage,
  popupDescription,
};

import { renderCards } from './Card.js';
import { FormValidator } from './FormValidator.js';

const btnAddCard = document.querySelector('.button-add');
const btnEditProfile = document.querySelector('.button-edit');
const btnCloseProfile = document.querySelector('#profile-close');
const btnCloseItem = document.querySelector('#item-close');
const btnCloseImage = document.querySelector('#image-close');
const popupModalProfile = document.querySelector('.popup-edit');
const popupModalCard = document.querySelector('.popup-newitem');
const popupModalImage = document.querySelector('.popup-image');
const formElementCard = document.querySelector('#card-form');
const formElementProfile = document.querySelector('#edit-form');
const nameInput = formElementProfile.querySelector('#name');
const jobInput = formElementProfile.querySelector('#description');
const newName = document.querySelector('.profile__name');
const newJob = document.querySelector('.profile__description');
const popupImage = document.querySelector('.popup-image__img');
const popupDescription = document.querySelector('.popup-image__description');
const placeInput = document.querySelector('#place');
const linkInput = document.querySelector('#link');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escHandler);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escHandler);
}

function clickHandler(popup) {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target);
    }
  });
}

function escHandler(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function formEditSubmitHandler(evt) {
  evt.preventDefault();

  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  closePopup(popupModalProfile);
}

function cardSubmitHandler(evt) {
  evt.preventDefault();
  renderCards(placeInput.value, linkInput.value);
  formElementCard.reset();
  closePopup(popupModalCard);
}

function resetButton(formElement) {
  const btnSubmit = formElement.querySelector('.button-save');
  btnSubmit.setAttribute('disabled', true);
  btnSubmit.classList.add('button-save_inactive');
}

btnEditProfile.addEventListener('click', (evt) => {
  openPopup(popupModalProfile);
  const form = new FormValidator(validationSettings, formElementProfile);
  form.enableValidation();
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
  clickHandler(popupModalProfile);
});

btnCloseProfile.addEventListener('click', () => closePopup(popupModalProfile));
btnAddCard.addEventListener('click', () => {
  openPopup(popupModalCard);
  resetButton(popupModalCard);
  const form = new FormValidator(validationSettings, formElementCard);
  form.enableValidation();
  clickHandler(popupModalCard);
});
btnCloseItem.addEventListener('click', () => closePopup(popupModalCard));
btnCloseImage.addEventListener('click', () => closePopup(popupModalImage));
formElementProfile.addEventListener('submit', formEditSubmitHandler);
formElementCard.addEventListener('submit', cardSubmitHandler);

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button-save',
  inactiveButtonClass: 'button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
