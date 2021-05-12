import PopupWithForm from './PopupWithForm'
import api from '../utils/api'

export default function AddPlacePopup(props) {
  return (
    <PopupWithForm name="add" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={props.onAddPlace} submitText="Создать">
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
  )
}