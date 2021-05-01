import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} submitText="Сохранить">
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
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitText="Создать">
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
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} submitText="Сохранить">
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
        </PopupWithForm>
        <PopupWithForm name="remove" title="Вы уверены?" onClose={closeAllPopups} submitText="Да" />
      </div>
    </div>
  );
}

export default App;
