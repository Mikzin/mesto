export default class Card {
  constructor(data, templateSelector, handleCardClick, deletePopup, savedInfo) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._confirmPopup = document.querySelector('.popup-confirm');
    this.cardOwnerId = data.owner._id;
    this._myId = savedInfo._id;
    this._deletePopup = deletePopup;
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

  _deleteCard() {
    this._handleCardClick();
    this._element = null;
  }

  _handleOpenImage() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.button-like');
    this._deleteButton = this._element.querySelector('.button-delete');
    this._cardImage = this._element.querySelector('.elements__card-image');
    this._cardHeading = this._element.querySelector('.elements__card-heading');
    this.likeCounter = this._element.querySelector('.button-like__counter');

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    if (!this._deleteButton.classList.contains('button-delete_inactive')) {
      this._deleteButton.addEventListener('click', () => {
        this._deletePopup(this._deleteCard.bind(this), this._id);
      });
    }

    this._cardImage.addEventListener('click', () => {
      this._handleOpenImage();
    });
  }

  // _countLikes() {}

  _setLike() {
    this.likeCounter.classList.toggle('button-like__counter_inactive');
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setLike();

    // console.log(this.cardOwnerId, this._myId);
    if (this.cardOwnerId !== this._myId) {
      this._deleteButton.classList.add('button-delete_inactive');
    }

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardHeading.textContent = this._name;
    this.likeCounter.textContent = this._likes.length;

    return this._element;
  }
}
