import React from 'react'
import PopupWithForm from './PopupWithForm'

export default function EditAvatarPopup(props) {

  const inputRef = React.createRef();

  function handleUpdateAvatar(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });

    inputRef.current.value = '';

    props.onClose();
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} isLoading={props.isLoading} onClose={props.onClose} onSubmit={handleUpdateAvatar} submitText="Сохранить">
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