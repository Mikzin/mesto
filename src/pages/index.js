import '../pages/index.css';
// import Card from '../components/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../components/Section.js';

import {
  newName,
  newJob,
  nameInput,
  jobInput,
  popupModalProfile,
  placeInput,
  linkInput,
  formElementCard,
  popupModalCard,
  initCards,
  validationSettings,
  formElementProfile,
  btnEditProfile,
  btnCloseProfile,
  btnAddCard,
  btnCloseItem,
  btnCloseImage,
  popupModalImage,
  cardListSelector,
} from '../utils/constants.js';

import { addCard, renderCard } from '../utils/utils.js';

const defaultCardList = new Section({ data: initCards }, cardListSelector);

defaultCardList.renderItems();

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escHandler);
  popup.addEventListener('click', clickHandler);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escHandler);
  popup.removeEventListener('click', clickHandler);
}

function clickHandler(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

function escHandler(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  closePopup(popupModalProfile);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  addCard(renderCard(placeInput.value, linkInput.value));
  formElementCard.reset();
  closePopup(popupModalCard);
}

const cardForm = new FormValidator(validationSettings, formElementCard);
cardForm.enableValidation();

const profileForm = new FormValidator(validationSettings, formElementProfile);
profileForm.enableValidation();

btnEditProfile.addEventListener('click', (evt) => {
  openPopup(popupModalProfile);
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
});

btnCloseProfile.addEventListener('click', () => closePopup(popupModalProfile));
btnAddCard.addEventListener('click', () => {
  openPopup(popupModalCard);
  cardForm.disableButton();
});
btnCloseItem.addEventListener('click', () => closePopup(popupModalCard));
btnCloseImage.addEventListener('click', () => closePopup(popupModalImage));
formElementProfile.addEventListener('submit', handleProfileFormSubmit);
formElementCard.addEventListener('submit', handleAddCardFormSubmit);
