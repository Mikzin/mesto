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
const formElementCard = document.querySelector('#card-form');
const formElementProfile = document.querySelector('#edit-form');
const nameInput = formElementProfile.querySelector('#name');
const jobInput = formElementProfile.querySelector('#description');
const newName = document.querySelector('.profile__name');
const newJob = document.querySelector('.profile__description');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup-image__img');
const popupDescription = document.querySelector('.popup-image__description');
const placeInput = document.querySelector('#place');
const linkInput = document.querySelector('#link');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', clickHandler);
  document.addEventListener('keydown', escHandler);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('keydown', escHandler);
}

function clickHandler(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
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
  createCard(placeInput.value, linkInput.value);
  formElementCard.reset();
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
  cardImage.src = srcValue;
  cardImage.alt = placeValue;

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

function resetButton(formElement) {
  const btnSubmit = formElement.querySelector('.button-save');
  // if (!btnSubmit.classList.contains('button-save_inactive')) {
  btnSubmit.setAttribute('disabled', true);
  btnSubmit.classList.add('button-save_inactive');
  // }
}

renderCards();
btnEditProfile.addEventListener('click', () => {
  openPopup(popupModalProfile);
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
});
btnCloseProfile.addEventListener('click', () => closePopup(popupModalProfile));
btnAddCard.addEventListener('click', () => {
  openPopup(popupModalCard);
  resetButton(popupModalCard);
});
btnCloseItem.addEventListener('click', () => closePopup(popupModalCard));
btnCloseImage.addEventListener('click', () => closePopup(popupModalImage));
formElementProfile.addEventListener('submit', formEditSubmitHandler);
formElementCard.addEventListener('submit', cardSubmitHandler);
