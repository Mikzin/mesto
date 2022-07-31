// const showError = (
//   formElement,
//   inputElement,
//   errorMessage,
//   { inputErrorClass, errorClass }
// ) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(errorClass);
// };

// const hideError = (
//   formElement,
//   inputElement,
//   { inputErrorClass, errorClass }
// ) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// };

// const checkInputValidity = (
//   formElement,
//   inputElement,
//   { inputErrorClass, errorClass }
// ) => {
//   if (!inputElement.validity.valid) {
//     showError(formElement, inputElement, inputElement.validationMessage, {
//       inputErrorClass,
//       errorClass,
//     });
//   } else {
//     hideError(formElement, inputElement, {
//       inputErrorClass,
//       errorClass,
//     });
//   }
// };

// function setEventListeners(
//   formElement,
//   {
//     inputSelector,
//     submitButtonSelector,
//     inactiveButtonClass,
//     inputErrorClass,
//     errorClass,
//   }
// ) {
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);

// inputList.forEach((inputElement) => {
//   inputElement.addEventListener('input', function () {
//     checkInputValidity(formElement, inputElement, {
//       inputSelector,
//       inputErrorClass,
//       errorClass,
//     });
//     toggleButtonState(inputList, buttonElement, { inactiveButtonClass });
//   });
// });
// }

// function enableValidation({ formSelector, ...rest }) {
//   const formList = Array.from(document.querySelectorAll(formSelector));

//   formList.forEach((formElement) => {
//     setEventListeners(formElement, { ...rest });
//   });
// }

// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// }

// function toggleButtonState(inputList, buttonElement, { inactiveButtonClass }) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.setAttribute('disabled', true);
//     buttonElement.classList.add(inactiveButtonClass);
//   } else {
//     buttonElement.classList.remove(inactiveButtonClass);
//     buttonElement.removeAttribute('disabled');
//   }
// }

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.button-save',
//   inactiveButtonClass: 'button-save_inactive',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error_active',
// });

export { FormValidator };

class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));

    formList.forEach((formElement) => {
      this._setEventListeners();
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }
}
