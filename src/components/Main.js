import React from 'react'
import api from '../utils/api'
import Card from './Card'

export default function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => console.log(err))
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
    .then((result) => {
      setCards(result)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__container">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img
              src={userAvatar}
              className="profile__avatar-image"
              alt="Аватар профиля"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </div>
      </div>
      <div className="cards">
        <div className="cards__container">
          {
            cards.map((card) => {
              return <Card key={card._id} card={card} onClick={props.onCardClick} />
            })
          })
        </div>
      </div>
    </main>
  )
}