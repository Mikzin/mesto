const editBtn = document.querySelector('.button-edit');
const closeBtn = document.querySelector('.button-close');
const addBtn = document.querySelector('.button-add');
const popupModal = document.querySelector('.popup-edit');
const popupModalCard = document.querySelector('.popup-newitem');
const popupModalImage = document.querySelector('.popup-image');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#description');
const newName = document.querySelector('.profile__name');
const newJob = document.querySelector('.profile__description');
const closeBtnItem = document.querySelector('#item-close');
const closeBtnImage = document.querySelector('#image-close');
const elements = document.querySelector('.elements');
const saveCard = document.querySelector('#button-save-item');
const popupImage = document.querySelector('.popup-image__img');
const popupDescription = document.querySelector('.popup-image__description');

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

function togglePopup(selector) {
  if (selector === popupModal) {
    nameInput.value = newName.textContent;
    jobInput.value = newJob.textContent;
  }
  selector.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  togglePopup(popupModal);
}

function addCard(placeValue, srcValue) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate
    .querySelector('.elements__card')
    .cloneNode(true);

  const cardImage = cardElement.querySelector('.elements__card-image');

  cardImage.addEventListener('click', function () {
    togglePopup(popupModalImage);
    popupImage.src = srcValue;
    popupDescription.textContent = placeValue;
  });

  cardElement.querySelector('.elements__card-heading').textContent = placeValue;
  cardElement.querySelector('.elements__card-image').src = srcValue;

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

  elements.prepend(cardElement);
}

saveCard.addEventListener('click', function (evt) {
  evt.preventDefault();
  const place = document.querySelector('#place');
  const link = document.querySelector('#link');

  addCard(place.value, link.value);

  place.value = '';
  link.value = '';

  togglePopup(popupModalCard);
});

function renderCards() {
  const cardName = [];
  const cardLink = [];
  for (let i = 0; i < initialCards.length; i++) {
    cardName[i] = initialCards[i].name;
    cardLink[i] = initialCards[i].link;
    cardName.push(cardName[i]);
    cardLink.push(cardLink[i]);
    addCard(cardName[i], cardLink[i]);
  }
}

renderCards();
editBtn.addEventListener('click', () => togglePopup(popupModal));
closeBtn.addEventListener('click', () => togglePopup(popupModal));
addBtn.addEventListener('click', () => togglePopup(popupModalCard));
closeBtnItem.addEventListener('click', () => togglePopup(popupModalCard));
closeBtnImage.addEventListener('click', () => togglePopup(popupModalImage));
formElement.addEventListener('submit', formSubmitHandler);
