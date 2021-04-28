import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
      <div className="page">
      <div className="page__content">
      <Header />
      <Main />
      <Footer />
      <template id="card">
        <article className="card">
          <img src="./" alt="Фото карточки" className="card__image" />
          <button className="card__delete-button"></button>
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__like">
              <button className="card__like-button" type="button"></button>
              <p className="card__likes-count">0</p>
            </div>
          </div>
        </article>
      </template>
      <div className="popup popup_type_editing">
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="editingPopupForm" noValidate>
            <input
              className="popup__input popup__input_type_name"
              type="text"
              name="profileName"
              id="profileName"
              placeholder="Ваше имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error" id="profileName-error"></span>
            <input
              className="popup__input popup__input_type_position"
              type="text"
              name="profilePosition"
              id="profilePosition"
              placeholder="Ваша должность"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error" id="profilePosition-error"></span>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
  
      <div className="popup popup_type_addition">
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="additionPopupForm" noValidate>
            <input
              className="popup__input popup__input_type_name"
              type="text"
              name="placeName"
              id="placeName"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error" id="placeName-error"></span>
            <input
              className="popup__input popup__input_type_link"
              type="url"
              name="placeLink"
              id="placeLink"
              placeholder="Ссылка на картинку"
              minLength="2"
              required
            />
            <span className="popup__error" id="placeLink-error"></span>
            <button className="popup__submit-button" type="submit">Создать</button>
          </form>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
  
      <div className="popup popup_type_image">
        <div className="popup__overlay popup__overlay_type_image"></div>
        <div className="popup__container popup__container_type_image">
          <img src="./" alt="Фото карточки" className="popup__image" />
          <h2 className="popup__title popup__title_type_image"></h2>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
  
      <div className="popup popup_type_avatar">
        <div className="popup__overlay popup__overlay_type_avatar"></div>
        <div className="popup__container popup__container_type_avatar">
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="avatarPopupForm" noValidate>
            <input
              className="popup__input popup__input_type_link"
              type="url"
              name="avatarLink"
              id="avatarLink"
              placeholder="Ссылка на картинку"
              minLength="2"
              required
            />
            <span className="popup__error" id="avatarLink-error"></span>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
  
      <div className="popup popup_type_remove">
        <div className="popup__overlay popup__overlay_type_remove"></div>
        <div className="popup__container popup__container_type_remove">
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" name="removingPopupForm" noValidate>
            <button className="popup__submit-button" type="submit">Да</button>
          </form>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
