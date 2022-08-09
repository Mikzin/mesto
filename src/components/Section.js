import Card from './Card';

export default class Section {
  constructor({ data }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._container.prepend(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    this.clear();

    this._renderedItems.forEach((item) => {
      const card = new Card(item, '.card-template_type_default');
      const cardElement = card.generateCard();

      this.setItem(cardElement);
    });
  }
}
