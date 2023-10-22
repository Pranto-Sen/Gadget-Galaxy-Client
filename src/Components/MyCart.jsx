import React, { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/localstorage";

const MyCart = () => {
  const [Cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
    setCart(storedCart);
  }, []);

  return (
    <div>
      {Cart.map((c) => (
        <li>{c.name}</li>
      ))}
    </div>
  );
};

export default MyCart;
