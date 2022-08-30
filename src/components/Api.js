import { info } from 'autoprefixer';

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserProfile() {
    return fetch(`${this._baseUrl}/cohort-49/users/me`, {
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cohort-49/cards`, {
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  }

  setUserProfile(info) {
    return fetch(`${this._baseUrl}/cohort-49/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about,
      }),
    }).then((res) => this._getResponse(res));
  }

  setAvatar(info) {
    return fetch(`${this._baseUrl}/cohort-49/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar: info.link }),
    }).then((res) => this._getResponse(res));
  }

  postCard(info) {
    return fetch(`${this._baseUrl}/cohort-49/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        link: info.link,
      }),
    }).then((res) => this._getResponse(res));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cohort-49/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  }

  putLikes(id) {
    return fetch(`${this._baseUrl}/cohort-49/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  }

  deleteLikes(id) {
    return fetch(`${this._baseUrl}/cohort-49/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
