export default class Card {
  constructor(data, templateSelector, handleCardClick) {
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
    this._likeButton.classList.toggle('button-like_active');
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleOpenImage() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.button-like');
    this._deleteButton = this._element.querySelector('.button-delete');
    this._cardImage = this._element.querySelector('.elements__card-image');
    this._cardHeading = this._element.querySelector('.elements__card-heading');

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleOpenImage();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardHeading.textContent = this._name;

    return this._element;
  }
}
