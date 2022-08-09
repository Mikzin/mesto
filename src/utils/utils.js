import Card from '../components/Card.js';
import { initCards } from '../utils/constants.js';

initCards.forEach((item) => {
  addCard(renderCard(item.name, item.link));
});

export function renderCard(name, link) {
  const card = new Card({ name, link }, '.card-template_type_default');
  return card.generateCard();
}

export function addCard(card) {
  document.querySelector('.elements').prepend(card);
}
