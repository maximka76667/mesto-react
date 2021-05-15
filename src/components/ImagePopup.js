export default function ImagePopup(props) {
  return(
    <div className={`popup popup_type_image ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay popup__overlay_type_image"></div>
      <div className="popup__container popup__container_type_image">
        <img src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} className="popup__image" />
        <h2 className="popup__title popup__title_type_image">{props.card ? props.card.name : ''}</h2>
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}