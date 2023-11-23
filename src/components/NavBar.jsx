import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/NavBar.css";

const NavBar = ({ size, setShow }) => {
  return (
    <div>
      <nav>
        <div className="nav-box">
          <span
            className="my-shop"
            onClick={() => {
              setShow(true);
            }}
          >
            Flash Shop
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  size: PropTypes.number.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default NavBar;
