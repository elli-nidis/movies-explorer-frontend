  
  // # возвращает информацию о пользователе (email и имя)
  // GET /users/me
  
  // # обновляет информацию о пользователе (email и имя)
  // PATCH /users/me
  
  // # возвращает все сохранённые текущим пользователем фильмы
  // GET /movies
  
  // # создаёт фильм с переданными в теле
  // # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId 
  // POST /movies
  
  // # удаляет сохранённый фильм по id
  // DELETE /movies/_id

//   country — страна создания фильма. Обязательное поле-строка.
// director — режиссёр фильма. Обязательное поле-строка.
// duration — длительность фильма. Обязательное поле-число.
// year — год выпуска фильма. Обязательное поле-строка.
// description — описание фильма. Обязательное поле-строка.
// image — ссылка на постер к фильму. Обязательное поле-строка. Запишите её URL-адресом.
// trailerLink — ссылка на трейлер фильма. Обязательное поле-строка. Запишите её URL-адресом.
// thumbnail — миниатюрное изображение постера к фильму. Обязательное поле-строка. Запишите её URL-адресом.
// owner — _id пользователя, который сохранил фильм. Обязательное поле.
// movieId — id фильма, который содержится в ответе сервиса MoviesExplorer. Обязательное поле в формате number.
// nameRU — название фильма на русском языке. Обязательное поле-строка.
// nameEN — название фильма на английском языке. Обязательное поле-строка.
  
  
  //запрашиваю на сервере данные пользователя, получаю объект
  // getUser() {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     headers: this._headers,
  //     credentials: 'include',
  //   })
  //   .then(this._checkResponse);
  // }

   //меняю данные пользователя на сервере
  //  patchUser(data) {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     credentials: 'include',
  //     body: JSON.stringify({
  //       name: data.name,
  //       about: data.description,
  //     })
  //   })
  //   .then(this._checkResponse);
  // }

    //меняю аватар на сервере
    // patchAvatar(data) {
    //   return fetch(`${this._baseUrl}/users/me/avatar`, {
    //     method: 'PATCH',
    //     headers: this._headers,
    //     credentials: 'include',
    //     body: JSON.stringify({
    //       avatar: data.avatar,
    //     })
    //   })
    //   .then(this._checkResponse);
    // }

      // отправляю лайк на сервер
  //  putLike(idCard) {
  //   // console.log(`putLike idCard ${idCard}`);
  //   return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
  //     method: 'PUT',
  //     credentials: 'include',
  //     headers: this._headers,
  //   })
  //   .then(this._checkResponse);
  // }

    // удаляю лайк с сервера
    // deleteLike(idCard) {
    //   // console.log(`deleteLike idCard ${idCard}`);
    //   return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
    //     method: 'DELETE',
    //     credentials: 'include',
    //     headers: this._headers,
    //   })
    //   .then(this._checkResponse);
    // }

    
  // меняю статус лайка
  // changeLikeCardStatus(isLiked, idCard) {
  //   return isLiked ? this.deleteLike(idCard) : this.putLike(idCard);
  // }

   // удаляю карточку с сервера
  //  deleteCard(idCard) {
  //   return fetch(`${this._baseUrl}/cards/${idCard}`, {
  //     method: 'DELETE',
  //     headers: this._headers,
  //     credentials: 'include',
  //   })
  //   .then(this._checkResponse);
  // }
