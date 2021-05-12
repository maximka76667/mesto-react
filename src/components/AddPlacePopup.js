import React from 'react'
import PopupWithForm from './PopupWithForm'

export default function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    
    props.onAddPlace({
      name,
      link
    })

    props.onClose();

    e.target.placeName.value = '';
    e.target.placeLink.value = '';
  }

  return (
    <PopupWithForm name="add" title="Новое место" isOpen={props.isOpen} isLoading={props.isLoading} onClose={props.onClose} onSubmit={handleAddPlaceSubmit} submitText="Создать">
      <input
        className="popup__input popup__input_type_name"
        type="text"
        name="placeName"
        id="placeName"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        onChange={handleChangeName}
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
        onChange={handleChangeLink}
      />
      <span className="popup__error" id="placeLink-error"></span>
    </PopupWithForm>
  )
}