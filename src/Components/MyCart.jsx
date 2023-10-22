import React, { useEffect, useState } from "react";
import { getStoredCart, removeFromLS } from "../utilities/localstorage";

const MyCart = () => {
    const [carts, setCart] = useState([]);

     const handleRemove = (cart) => {
       const remainingCart = carts.filter((c) => c._id !== cart._id);
       setCart(remainingCart);
       removeFromLS(cart._id);
    };
    

  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
    setCart(storedCart);
  }, []);

   
  return (
    <div>
      {carts.map((cart) => (
        <div className="flex">
          <li>{cart.name}</li>
          <button
            onClick={() => handleRemove(cart)}
            className="btn btn-danger"
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
