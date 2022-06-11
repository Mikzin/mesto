const editBtn = document.querySelector('.button-edit');
const closeBtn = document.querySelector('.button-close');
const popupModal = document.querySelector('.popup');

function openModal() {
  popupModal.classList.add('popup__opened');
}

function closeModal() {
  popupModal.classList.remove('popup__opened');
}

editBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__description');

function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  let newName = document.querySelector('.profile__name');
  let newJob = document.querySelector('.profile__description');
  newName.textContent = nameValue;
  newJob.textContent = jobValue;

  closeModal();
}

formElement.addEventListener('submit', formSubmitHandler);
