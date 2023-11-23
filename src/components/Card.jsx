import PropTypes from "prop-types";
import "../Styles/card.css";

const Card = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div>
      <div className="cards">
        <div className="image-box">
          <img src={img} alt="image" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>price - {price}Rs</p>
          <button
            onClick={() => {
              handleClick(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
