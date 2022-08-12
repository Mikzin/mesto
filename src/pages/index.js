import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';

import {
  nameInput,
  jobInput,
  formElementCard,
  initCards,
  validationSettings,
  formElementProfile,
  btnEditProfile,
  btnAddCard,
  cardListSelector,
} from '../utils/constants.js';

import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';

const cardForm = new FormValidator(validationSettings, formElementCard);
cardForm.enableValidation();

const profileForm = new FormValidator(validationSettings, formElementProfile);
profileForm.enableValidation();

const defaultCardList = new Section(
  {
    data: initCards,
    renderer: (item) => {
      defaultCardList.addItem(createCard(item));
    },
  },
  cardListSelector
);
defaultCardList.renderItems();

const popupImage = new PopupWithImage('.popup-image');

const formCard = new PopupWithForm({
  popupSelector: '.popup-newitem',
  handleFormSubmit: (formData) => {
    defaultCardList.addItem(createCard(formData));
  },
});

const formEdit = new PopupWithForm({
  popupSelector: '.popup-edit',
  handleFormSubmit: (userData) => {
    info.setUserInfo(userData.firstname, userData.description);
    formEdit.close();
  },
});

const info = new UserInfo('.profile__name', '.profile__description');

function editInputs() {
  const userInfo = info.getUserInfo();
  formEdit.setInputValues(userInfo);
}

function handleCardClick(name, url) {
  popupImage.open(name, url);
}

function createCard(item) {
  const card = new Card(item, '.card-template_type_default', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

btnAddCard.addEventListener('click', () => {
  formCard.open();
  cardForm.disableButton();
  cardForm.resetValidation();
});

btnEditProfile.addEventListener('click', () => {
  formEdit.open();
  editInputs();
  profileForm.resetValidation();
});
