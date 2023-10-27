import { apiMoviesConfig } from "./constants";

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = {
      'Content-Type': options.headers['Content-Type']
    };
  }

  //проверка ответа сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    //если ошибка, отклоняю промисс
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //запрашиваю на сервере все фильмы, получаю массив с объектами
  getAllMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse)
  }
}

//создаю экземпляр класса Api
const moviesApi = new MoviesApi({
  baseUrl: apiMoviesConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
}); 

export {moviesApi};