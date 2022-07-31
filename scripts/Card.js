import {
  openPopup,
  popupImage,
  clickHandler,
  popupModalImage,
  popupDescription,
} from './index.js';

export { renderCards };

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

class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.elements__card')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeClick() {
    this._element
      .querySelector('.button-like')
      .classList.toggle('button-like_active');
  }

  _handleDeleteClick() {
    this._element
      .querySelector('.button-delete')
      .closest('.elements__card')
      .remove();
  }

  _handleOpenImage() {
    openPopup(popupModalImage);
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupDescription.textContent = this._name;
    clickHandler(popupModalImage);
  }

  _setEventListeners() {
    this._element
      .querySelector('.button-like')
      .addEventListener('click', () => {
        this._handleLikeClick();
      });

    this._element
      .querySelector('.button-delete')
      .addEventListener('click', () => {
        this._handleDeleteClick();
      });

    this._element
      .querySelector('.elements__card-image')
      .addEventListener('click', () => {
        this._handleOpenImage();
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.elements__card-image').src = this._link;
    this._element.querySelector('.elements__card-image').alt = this._name;
    this._element.querySelector('.elements__card-heading').textContent =
      this._name;

    return this._element;
  }
}

initCards.forEach((item) => {
  renderCards(item.name, item.link);
});

function renderCards(name, link) {
  const card = new Card(name, link, '.card-template_type_default');
  const cardElement = card.generateCard();

  document.querySelector('.elements').prepend(cardElement);
}
