import starIcon from '../assets/images/star.png';
import { getImage, getImageAlt } from '../utilities/helpers';

const Card = (props) => {
  const btnText = props.openSpots === 0
    ? 'SOLD OUT'
    : (props.location === 'Online'
        ? "ONLINE" 
        : "");
  return (
    <article className="card">
      <header className="card-image-container">
        <img 
          className="card-image"
          src={getImage(props.coverImg)} 
          alt={getImageAlt(props.coverImg)} 
        />
        {btnText !== "" && (
          <button className="card-btn">{btnText}</button>
        )}
      </header>
      
      <div className="card-info">
        <div className="card-stats">
          <img 
            className="star-icon"
            src={starIcon} 
            alt="star icon"
          />
          <p>
            <span className="card-rating">
              {props.stats.rating}
            </span>
            <span className="card-review">
              ({props.stats.reviewCount})
            </span>
            &#x2022;
            <span className="card-location">
              {props.location}
            </span>
          </p>
        </div>

        <h3 className="card-title">
          {props.title}
        </h3>

        <p className="card-price">
          <span className="bold">From ${props.price}</span>
          {' '}/{' '}person
        </p>
      </div>
    </article>
  )
}

export default Card;