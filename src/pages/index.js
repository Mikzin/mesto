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
      const card = new Card(item, '.card-template_type_default');
      const cardElement = card.generateCard();

      defaultCardList.addItem(cardElement);
    },
  },
  cardListSelector
);
defaultCardList.renderItems();

const popupImage = new PopupWithImage('.popup-image');

const formCard = new PopupWithForm({
  popupSelector: '.popup-newitem',
  handleFormSubmit: (formData) => {
    const card = new Card(formData, '.card-template_type_default');
    const cardElement = card.generateCard();

    defaultCardList.addItem(cardElement);
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
  nameInput.value = userInfo.firstname;
  jobInput.value = userInfo.description;
}

export function handleCardClick(name, url) {
  popupImage.open(name, url);
}

btnAddCard.addEventListener('click', () => {
  formCard.open();
  cardForm.disableButton();
});

btnEditProfile.addEventListener('click', () => {
  formEdit.open();
  editInputs();
});
