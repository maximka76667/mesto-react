import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
import api from '../utils/api'
import CurrentUserContext from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
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

  function handleUpdateUser(data) {
    api.setProfileInfo(data).then((res) => {
      setCurrentUser(res);
    })
  }

  function handleUpdateAvatar({avatar}) {
    api.changeAvatar(avatar).then((res) => {
      setCurrentUser(res);
    })
  }

  React.useEffect(() => {
    api.getProfileInfo()
    .then((data) => {
      setCurrentUser(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
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
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <PopupWithForm name="remove" title="Вы уверены?" onClose={closeAllPopups} submitText="Да" />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
