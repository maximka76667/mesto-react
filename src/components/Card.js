import React from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext'

export default function Card(props) {

  const card = props.card;

  const currentUser = React.useContext(CurrentUserContext);

  const isOwner = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwner ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  ); 

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_active' : 'card__like-button_disabled'}`
  );

  function handleClick() {
    props.onClick(card)
  }

  function handleCardLike() {
    props.onCardLike(card);
  }

  function handleCardDelete() {
    props.onCardDelete(card);
  }

  return (
    <article className="card">
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick} />
      <button className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className={cardLikeButtonClassName} type="button" onClick={handleCardLike} ></button>
          <p className="card__likes-count">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}