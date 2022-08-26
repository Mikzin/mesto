export default class UserInfo {
  constructor(nameSelector, infoSelector, avatarSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileInfo = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    this._firstname = this._profileName.textContent;
    this._description = this._profileInfo.textContent;

    this.info = {
      name: this._firstname,
      about: this._description,
    };

    return this.info;
  }

  setUserInfo(nameInput, infoInput) {
    this._profileName.textContent = nameInput;
    this._profileInfo.textContent = infoInput;
  }

  setUserAvatar(avatarLink) {
    this._avatar.src = avatarLink;
  }
}
