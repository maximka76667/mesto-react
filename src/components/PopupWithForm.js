import React from 'react'

export default function PopupWithForm({ isOpen, isLoading, name, title, onSubmit, submitText, onClose, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay popup__overlay_type_remove"></div>
        <div className="popup__container popup__container_type_remove">
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" name={name} onSubmit={onSubmit} noValidate>
            {children}
            <button className="popup__submit-button" type="submit">{ isLoading ? 'Загрузка...' : submitText}</button>
          </form>
          <button className="popup__close-button" type="button" onClick={onClose}></button>
        </div>
    </div>
  )
}