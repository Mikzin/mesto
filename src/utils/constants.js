import angelsImage from '../images/angels.jpg';
import isaacImage from '../images/isaac.jpg';
import kazanImage from '../images/kazan.jpg';
import lakhtaImage from '../images/lakhta.jpg';
import vantoviiImage from '../images/vantovii.jpg';
import vitebskiiImage from '../images/vitebskii.jpg';

export const initCards = [
  {
    name: 'Ангелы',
    link: angelsImage,
  },
  {
    name: 'Исаакиевский Собор',
    link: isaacImage,
  },
  {
    name: 'Казанский собор',
    link: kazanImage,
  },
  {
    name: 'Лахта Центр',
    link: lakhtaImage,
  },
  {
    name: 'Вантовый мост',
    link: vantoviiImage,
  },
  {
    name: 'Витебский вокзал',
    link: vitebskiiImage,
  },
];
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button-save',
  inactiveButtonClass: 'button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
export const btnAddCard = document.querySelector('.button-add');
export const btnEditProfile = document.querySelector('.button-edit');
export const btnCloseProfile = document.querySelector('#profile-close');
export const btnCloseItem = document.querySelector('#item-close');
export const btnCloseImage = document.querySelector('#image-close');
export const popupModalProfile = document.querySelector('.popup-edit');
export const popupModalCard = document.querySelector('.popup-newitem');
export const popupModalImage = document.querySelector('.popup-image');
export const formElementCard = document.querySelector('#card-form');
export const formElementProfile = document.querySelector('#edit-form');
export const nameInput = formElementProfile.querySelector('#name');
export const jobInput = formElementProfile.querySelector('#description');
export const newName = document.querySelector('.profile__name');
export const newJob = document.querySelector('.profile__description');
export const popupImage = document.querySelector('.popup-image__img');
export const popupDescription = document.querySelector(
  '.popup-image__description'
);
export const placeInput = document.querySelector('#place');
export const linkInput = document.querySelector('#link');
export const cardListSelector = '.elements';
// export const popupCardSelector = '.popup-newitem';
export const popupEditSelector = '.popup-edit';
