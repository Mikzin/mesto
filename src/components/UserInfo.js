export default class UserInfo {
  constructor(nameSelector, infoSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileInfo = document.querySelector(infoSelector);
  }

  getUserInfo() {
    this._firstname = this._profileName.textContent;
    this._description = this._profileInfo.textContent;

    this.info = {
      firstname: this._firstname,
      description: this._description,
    };

    return this.info;
  }

  setUserInfo(nameInput, infoInput) {
    this._profileName.textContent = nameInput;
    this._profileInfo.textContent = infoInput;
  }
}
