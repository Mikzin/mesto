const editBtn = document.querySelector('.button-edit');
const closeBtn = document.querySelector('.button-close');
const addBtn = document.querySelector('.button-add');
const popupModal = document.querySelector('.popup');
const popupModalCard = document.querySelector('.popup-newitem');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#description');
const newName = document.querySelector('.profile__name');
const newJob = document.querySelector('.profile__description');
const closeBtnItem = document.querySelector('#item-close');

function togglePopup() {
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
  popupModal.classList.toggle('popup_opened');
}

function togglePopupItem() {
  popupModalCard.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  togglePopup();
}

editBtn.addEventListener('click', togglePopup);
closeBtn.addEventListener('click', togglePopup);
addBtn.addEventListener('click', togglePopupItem);
closeBtnItem.addEventListener('click', togglePopupItem);
formElement.addEventListener('submit', formSubmitHandler);
