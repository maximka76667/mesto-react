export default function Card(props) {
  return (
    <article className="card">
      <img src={props.card.link} alt={props.card.name} className="card__image" onClick={props.onClick} />
      <button className="card__delete-button"></button>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button className="card__like-button" type="button"></button>
          <p className="card__likes-count">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}