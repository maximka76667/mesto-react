export default function ImagePopup() {
  return(
    <div className="popup popup_type_image">
      <div className="popup__overlay popup__overlay_type_image"></div>
      <div className="popup__container popup__container_type_image">
        <img src="./" alt="Фото карточки" className="popup__image" />
        <h2 className="popup__title popup__title_type_image"></h2>
        <button className="popup__close-button" type="button"></button>
      </div>
    </div>
  )
}