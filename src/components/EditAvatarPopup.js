import React from 'react'
import PopupWithForm from './PopupWithForm'

export default function EditAvatarPopup({ isOpen, isLoading, onClose, onUpdateAvatar }) {

  const inputRef = React.createRef();

  function handleUpdateAvatar(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  React.useEffect(() => {
    inputRef.current.value = '';
  }, [isOpen, inputRef])

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} isLoading={isLoading} onClose={onClose} onSubmit={handleUpdateAvatar} submitText="Сохранить">
      <input
        className="popup__input popup__input_type_link"
        type="url"
        name="avatarLink"
        id="avatarLink"
        placeholder="Ссылка на картинку"
        minLength="2"
        required
        ref={inputRef}
      />
      <span className="popup__error" id="avatarLink-error"></span>
    </PopupWithForm>
  )
}