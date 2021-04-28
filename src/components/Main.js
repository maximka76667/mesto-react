import avatar from '../images/profile-avatar.jpg'

export default function Main() {
  return (
    <main className="content">
      <div className="profile">
        <div className="profile__container">
          <div className="profile__avatar">
            <img
              src={avatar}
              className="profile__avatar-image"
              alt="Аватар профиля"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button"></button>
            <p className="profile__position">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button"></button>
        </div>
      </div>
      <div className="cards">
        <div className="cards__container"></div>
      </div>
    </main>
  )
}