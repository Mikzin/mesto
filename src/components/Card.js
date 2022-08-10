import { handleCardClick } from '../pages/index.js';

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._element.remove();
  }

  _handleOpenImage() {
    this._handleCardClick(this._name, this._link);
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

    const image = this._element.querySelector('.elements__card-image');
    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector('.elements__card-heading').textContent =
      this._name;

    return this._element;
  }
}
