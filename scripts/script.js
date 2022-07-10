const initialCards = [
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
const btnAddCard = document.querySelector('.button-add');
const btnEditProfile = document.querySelector('.button-edit');
const btnCloseProfile = document.querySelector('#profile-close');
const btnCloseItem = document.querySelector('#item-close');
const btnCloseImage = document.querySelector('#image-close');
const btnSaveCard = document.querySelector('#button-save-item');
const btnSaveProfile = document.querySelector('#button-save-profile');
const popupModalProfile = document.querySelector('.popup-edit');
const popupModalCard = document.querySelector('.popup-newitem');
const popupModalImage = document.querySelector('.popup-image');
// const formElementCard = document.querySelector('#card');
// const formElementProfile = document.querySelector('#edit');
// const nameInput = formElementProfile.querySelector('#name');
// const jobInput = formElementProfile.querySelector('#description');
const formCard = document.forms.card;
const formEdit = document.forms.edit;
const profileName = formEdit.elements.firstname;
const profileDesc = formEdit.elements.description;
const newName = document.querySelector('.profile__name');
const newJob = document.querySelector('.profile__description');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup-image__img');
const popupDescription = document.querySelector('.popup-image__description');
const placeInput = document.querySelector('#place');
const linkInput = document.querySelector('#link');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  clickHandler(popup);
  escHandler(popup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', clickHandler);
  popup.removeEventListener('click', escHandler);
}

function clickHandler(popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  });
}

function escHandler(popup) {
  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
}

function formEditSubmitHandler(evt) {
  evt.preventDefault();

  newName.textContent = profileName.value;
  newJob.textContent = profileDesc.value;

  closePopup(popupModalProfile);
}

function cardSubmitHandler(evt) {
  evt.preventDefault();
  createCard(placeInput.value, linkInput.value);
  formCard.reset();
  closePopup(popupModalCard);
}

function createCard(placeValue, srcValue) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate
    .querySelector('.elements__card')
    .cloneNode(true);

  const cardImage = cardElement.querySelector('.elements__card-image');

  cardImage.addEventListener('click', function () {
    openPopup(popupModalImage);
    popupImage.src = srcValue;
    popupImage.alt = placeValue;
    popupDescription.textContent = placeValue;
  });

  cardElement.querySelector('.elements__card-heading').textContent = placeValue;
  cardElement.querySelector('.elements__card-image').src = srcValue;
  cardElement.querySelector('.elements__card-image').alt = placeValue;

  cardElement
    .querySelector('.button-like')
    .addEventListener('click', function (evt) {
      evt.target.classList.toggle('button-like_active');
    });

  cardElement
    .querySelector('.button-delete')
    .addEventListener('click', function (evt) {
      evt.target.closest('.elements__card').remove();
    });

  addCard(cardElement);
}

function addCard(card) {
  elements.prepend(card);
}

function renderCards() {
  initialCards.forEach(({ name, link }) => {
    createCard(name, link);
  });
}

renderCards();
validateForm(formCard);
btnEditProfile.addEventListener('click', () => {
  openPopup(popupModalProfile);
  profileName.value = newName.textContent;
  profileDesc.value = newJob.textContent;
});
btnCloseProfile.addEventListener('click', () => closePopup(popupModalProfile));
btnAddCard.addEventListener('click', () => openPopup(popupModalCard));
btnCloseItem.addEventListener('click', () => closePopup(popupModalCard));
btnCloseImage.addEventListener('click', () => closePopup(popupModalImage));
formEdit.addEventListener('submit', formEditSubmitHandler);
formCard.addEventListener('submit', cardSubmitHandler);

////////////////////////

formEdit.addEventListener('input', handlerInputForm);
formCard.addEventListener('input', handlerInputForm);

function handlerInputForm(evt) {
  const form = evt.currentTarget;

  validateForm(form);
}

function validateForm(form) {
  const submitButton = form.querySelector('.button-save');
  if (form.checkValidity()) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('button-save_inactive');
  } else {
    submitButton.classList.add('button-save_inactive');
    submitButton.setAttribute('disabled', true);
  }
}

// const formElement = document.querySelector('.popup__form-edit');
// const formInput = formElement.querySelector('.popup__input');
// const formError = formElement.querySelector(`${formInput.id}-error`);

// formInput.addEventListener('input', function (evt) {
//   checkInputValidity();
// });

// const showError = (input, errorMessage) => {
//   input.classList.add('popup__input_type_error');
//   formError.textContent = errorMessage;
//   formError.classList.add('popup__input-error_active');
// };

// const hideError = (input) => {
//   input.classList.remove('popup__input_type_error');
//   formError.classList.remove('popup__input-error_active');
//   formError.textContent = '';
// };

// function checkInputValidity() {
//   if (!formInput.validity.valid) {
//     showError(formInput, formInput.validationMessage);
//   } else {
//     hideError(formInput);
//   }
// }
