export { openPopup, popupImage, popupModalImage, popupDescription };

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const initCards = [
  {
    name: 'Ангелы',
    link: './images/angels.jpg',
  },
  {
    name: 'Исаакиевский Собор',
    link: './images/isaac.jpg',
  },
  {
    name: 'Казанский собор',
    link: './images/kazan.jpg',
  },
  {
    name: 'Лахта Центр',
    link: './images/lakhta.jpg',
  },
  {
    name: 'Вантовый мост',
    link: './images/vantovii.jpg',
  },
  {
    name: 'Витебский вокзал',
    link: './images/vitebskii.jpg',
  },
];
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button-save',
  inactiveButtonClass: 'button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
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
  clickHandler(popup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escHandler);
  document.removeEventListener('click', clickHandler(popup));
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  closePopup(popupModalProfile);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(placeInput.value, linkInput.value);
  formElementCard.reset();
  closePopup(popupModalCard);
}

initCards.forEach((item) => {
  renderCard(item.name, item.link);
});

function renderCard(name, link) {
  const card = new Card(name, link, '.card-template_type_default');
  const cardElement = card.generateCard();

  addCard(cardElement);
}

function addCard(card) {
  document.querySelector('.elements').prepend(card);
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
  cardForm.resetButton(popupModalCard);
});
btnCloseItem.addEventListener('click', () => closePopup(popupModalCard));
btnCloseImage.addEventListener('click', () => closePopup(popupModalImage));
formElementProfile.addEventListener('submit', handleProfileFormSubmit);
formElementCard.addEventListener('submit', handleAddCardFormSubmit);
