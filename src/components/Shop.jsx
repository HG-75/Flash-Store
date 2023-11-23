import PropTypes from "prop-types";
import Covers from "../list";
import Card from "./Card";

const Shop = ({ handleClick }) => {
  return (
    <section>
      {Covers.map((item) => {
        return <Card item={item} key={item.id} handleClick={handleClick} />;
      })}
    </section>
  );
};

Shop.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Shop;
