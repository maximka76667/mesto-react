import React from 'react'
import api from '../utils/api'
import Card from './Card'
import CurrentUserContext from '../contexts/CurrentUserContext'

export default React.memo(function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
    .then((result) => {
      setCards(result)
    })
    .catch((err) => console.log(err))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      setCards(cards.filter((newCard) => newCard._id !== card._id))
    });
  }

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__container">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img
              src={currentUser.avatar}
              className="profile__avatar-image"
              alt="Аватар профиля"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </div>
      </div>
      <div className="cards">
        <div className="cards__container">
          {
            cards.map((card) => {
              return <Card key={card._id} card={card} onClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
            })
          })
        </div>
      </div>
    </main>
  )
})