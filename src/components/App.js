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
  const [selectedCard, setSelectedCard] = React.useState('')

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(e) {
    setSelectedCard(e.target);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} submitText="Сохранить">
          <input
            class="popup__input popup__input_type_name"
            type="text"
            name="profileName"
            id="profileName"
            placeholder="Ваше имя"
            minlength="2"
            maxlength="40"
            required
          />
          <span class="popup__error" id="profileName-error"></span>
          <input
            class="popup__input popup__input_type_position"
            type="text"
            name="profilePosition"
            id="profilePosition"
            placeholder="Ваша должность"
            minlength="2"
            maxlength="200"
            required
          />
          <span class="popup__error" id="profilePosition-error"></span>
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitText="Создать">
          <input
            class="popup__input popup__input_type_name"
            type="text"
            name="placeName"
            id="placeName"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
          />
          <span class="popup__error" id="placeName-error"></span>
          <input
            class="popup__input popup__input_type_link"
            type="url"
            name="placeLink"
            id="placeLink"
            placeholder="Ссылка на картинку"
            minlength="2"
            required
          />
          <span class="popup__error" id="placeLink-error"></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} submitText="Сохранить">
          <input
            class="popup__input popup__input_type_link"
            type="url"
            name="avatarLink"
            id="avatarLink"
            placeholder="Ссылка на картинку"
            minlength="2"
            required
          />
          <span class="popup__error" id="avatarLink-error"></span>
        </PopupWithForm>
        <PopupWithForm name="remove" title="Вы уверены?" onClose={closeAllPopups} submitText="Да" />
      </div>
    </div>
  );
}

export default App;
