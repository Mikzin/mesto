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
    } catch (e) {
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
    } catch (e) {
      console.log('Не удалось получить данные карточек!');
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
