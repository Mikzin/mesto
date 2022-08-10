import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup-image__img');
    this._popupDescription = this._popup.querySelector(
      '.popup-image__description'
    );
    this.setEventListeners();
  }

  open(name, link) {
    this._popupImage.alt = name;
    this._popupImage.src = link;
    this._popupDescription.textContent = name;
    super.open();
  }
}
