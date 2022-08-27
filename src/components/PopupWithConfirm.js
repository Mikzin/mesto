import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._setEventListeners();
  }

  _setEventListeners() {
    this._form = this._popup.querySelector('.popup__form');
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this.deleteCard, this.id);
    });
    super.setEventListeners();
  }

  open(deleteCard, id) {
    super.open();
    this.deleteCard = deleteCard;
    this.id = id;
  }
}
