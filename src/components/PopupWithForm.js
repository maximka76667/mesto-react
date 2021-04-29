import React from 'react'

export default function PopupWithForm(props) {
  const isOpen = props.isOpen;

  return (
    <div className={`popup popup_type_${props.name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay popup__overlay_type_remove"></div>
        <div className="popup__container popup__container_type_remove">
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={props.name} noValidate>
            {props.children}
            <button className="popup__submit-button" type="submit">Да</button>
          </form>
          <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        </div>
    </div>
  )
}