import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';

import {
  formElementCard,
  // initCards,
  validationSettings,
  formElementProfile,
  btnEditProfile,
  btnAddCard,
  btnEditAvatar,
  cardListSelector,
  apiData,
  initCards,
  formElementAvatar,
} from '../utils/constants.js';

import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import Api from '../components/Api';
import PopupWithConfirm from '../components/PopupWithConfirm';

const cardForm = new FormValidator(validationSettings, formElementCard);
cardForm.enableValidation();

const profileForm = new FormValidator(validationSettings, formElementProfile);
profileForm.enableValidation();

const avatarForm = new FormValidator(validationSettings, formElementAvatar);
avatarForm.enableValidation();

const defaultCardList = new Section(
  {
    data: initCards,
    renderer: (item) => {
      defaultCardList.addItem(createCard(item));
    },
  },
  cardListSelector
);

const popupImage = new PopupWithImage('.popup-image');

const popupConfirm = new PopupWithConfirm({
  popupSelector: '.popup-confirm',
  handleFormSubmit: (deleteCard, id) => {
    api.deleteCard(id).then(() => {
      deleteCard();
      popupConfirm.close();
    });
  },
});

const formCard = new PopupWithForm({
  popupSelector: '.popup-newitem',
  handleFormSubmit: (data, btnSubmit) => {
    sumbitLoading(true, btnSubmit);
    api
      .postCard(data)
      .then((formData) => {
        defaultCardList.addItem(createCard(formData));
      })
      .finally(() => {
        sumbitLoading(false, btnSubmit);
      });
  },
});

const formEdit = new PopupWithForm({
  popupSelector: '.popup-edit',
  handleFormSubmit: (data, btnSubmit) => {
    sumbitLoading(true, btnSubmit);
    api
      .setUserProfile(data)
      .then((userData) => {
        info.setUserInfo(userData.name, userData.about);
        formEdit.close();
      })
      .finally(() => {
        sumbitLoading(false, btnSubmit);
      });
  },
});

const formAvatar = new PopupWithForm({
  popupSelector: '.popup-avatar',
  handleFormSubmit: (data, btnSubmit) => {
    sumbitLoading(true, btnSubmit);
    api
      .setAvatar(data)
      .then((avatarInfo) => {
        info.setUserAvatar(avatarInfo.avatar);
        formAvatar.close();
        2;
      })
      .finally(() => {
        sumbitLoading(false, btnSubmit);
      });
  },
});

const info = new UserInfo(
  '.profile__name',
  '.profile__description',
  '.profile__avatar'
);

const api = new Api(apiData);

Promise.all([api.getUserProfile(), api.getInitialCards()]).then(
  ([userData, userCards]) => {
    info.saveUserInfo(userData);
    info.setUserInfo(userData.name, userData.about);
    info.setUserAvatar(userData.avatar);
    defaultCardList.renderItems(userCards);
  }
);

function editInputs() {
  const userInfo = info.getUserInfo();
  formEdit.setInputValues(userInfo);
}

function handleCardClick(name, url) {
  popupImage.open(name, url);
}

function createCard(item) {
  const card = new Card(
    item,
    '.card-template_type_default',
    handleCardClick,
    popupConfirm.open.bind(popupConfirm),
    info.getSavedInfo(),
    api.putLikes.bind(api),
    api.deleteLikes.bind(api)
  );
  const cardElement = card.generateCard();
  return cardElement;
}

function sumbitLoading(isLoading, btnSubmit) {
  if (isLoading) {
    btnSubmit.textContent = 'Cохранение...';
  } else {
    btnSubmit.textContent = 'Cохранить';
  }
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

btnEditAvatar.addEventListener('click', () => {
  formAvatar.open();
  avatarForm.resetValidation();
});
