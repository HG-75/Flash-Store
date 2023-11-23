import { useState } from "react";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import "./Styles/App.css";
import Cart from "./components/Cart";
const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr]);
  };

  return (
    <div>
      <NavBar size={cart.length} setShow={setShow} />
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {warning && <div className="warning">item is already in your cart </div>}
    </div>
  );
};

export default App;
