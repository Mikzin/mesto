import { info } from 'autoprefixer';

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserProfile() {
    return fetch(`${this._baseUrl}/cohort-49/users/me`, {
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
      .catch((err) => {
        console.log('Не удалось получить данные профиля!');
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cohort-49/cards`, {
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
      .catch((err) => {
        console.log('Не удалось получить данные карточек!');
      });
  }

  setUserProfile(info) {
    return fetch(`${this._baseUrl}/cohort-49/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about,
      }),
    })
      .then((res) => this._getResponse(res))
      .catch((err) => {
        console.log('Не удалось отправить данные!=(');
      });
  }

  setAvatar(info) {
    return fetch(`${this._baseUrl}/cohort-49/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar: info.link }),
    })
      .then((res) => this._getResponse(res))
      .catch((err) => {
        console.log('Не удалось сменить аватар!');
      });
  }

  postCard(info) {
    return fetch(`${this._baseUrl}/cohort-49/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        link: info.link,
      }),
    })
      .then((res) => this._getResponse(res))
      .catch((err) => {
        console.log('Не удалось отправить карточку!=(');
      });
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cohort-49/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
      .catch((err) => {
        console.log('Не удалось удалить карточку!');
      });
  }

  putLikes(id) {
    return fetch(`${this._baseUrl}/cohort-49/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
      .catch((err) => {
        console.log('Не удалось поставить лайк!');
      });
  }

  deleteLikes(id) {
    return fetch(`${this._baseUrl}/cohort-49/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
      .catch((err) => {
        console.log('Не удалось убрать лайк!');
      });
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
