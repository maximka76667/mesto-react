import React from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm'

export default function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    props.onUpdateUser({
      name,
      about: description,
    });

    props.onClose();
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  return (
    <PopupWithForm name="edit" title="Редактировать профиль" submitText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
      <input
        className="popup__input popup__input_type_name"
        type="text"
        name="profileName"
        id="profileName"
        placeholder="Ваше имя"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={handleChangeName}
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
        value={description}
        onChange={handleChangeDescription}
      />
      <span className="popup__error" id="profilePosition-error"></span>
    </PopupWithForm>
  )
}