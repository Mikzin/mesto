const editBtn = document.querySelector('.button-edit');
const closeBtn = document.querySelector('.button-close');
const popupModal = document.querySelector('.popup');

function openModal() {
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
  popupModal.classList.add('popup_opened');
}

function closeModal() {
  popupModal.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#description');
let newName = document.querySelector('.profile__name');
let newJob = document.querySelector('.profile__description');

function formSubmitHandler(evt) {
  evt.preventDefault();

  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  closeModal();
}

formElement.addEventListener('submit', formSubmitHandler);
