export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  async getUserProfile() {
    try {
      const res = await fetch(`${this._baseUrl}/cohort-49/users/me`, {
        headers: this._headers,
      });

      const data = await this._getResponse(res);
      return data;
    } catch (err) {
      console.log('Не удалось получить данные профиля!');
    }
  }

  async getInitialCards() {
    try {
      const res = await fetch(`${this._baseUrl}/cohort-49/cards`, {
        headers: this._headers,
      });

      const data = await this._getResponse(res);
      return data;
    } catch (err) {
      console.log('Не удалось получить данные карточек!');
    }
  }

  async setUserProfile(info) {
    try {
      const post = await fetch(`${this._baseUrl}/cohort-49/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: info.name,
          about: info.about,
        }),
      });

      const data = await this._getResponse(post);
      return data;
    } catch (err) {
      console.log('Не удалось отправить данные!=(');
    }
  }

  async postCard(info) {
    try {
      const card = await fetch(`${this._baseUrl}/cohort-49/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: info.name,
          link: info.link,
        }),
      });

      const data = await this._getResponse(card);
      return data;
    } catch (err) {
      console.log('Не удалось отправить карточку!=(');
    }
  }

  async deleteCard(id) {
    try {
      const card = await fetch(`${this._baseUrl}/cohort-49/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers,
      });

      const data = await this._getResponse(card);
      return data;
    } catch (err) {
      console.log('Не удалось удалить карточку!');
    }
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
