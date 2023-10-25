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
      <h2 className="text-center py-4 text-2xl font-bold">Cart List</h2>
      {carts.map((cart) => (
        <div className="overflow-x-auto max-w-xl mx-auto">
          <table className="table table-zebra">
            <tbody>
              <tr className="flex justify-center items-center">
                <td className="w-80 font-semibold">{cart.name}</td>
                <td className="">
                  {" "}
                  <button
                    onClick={() => handleRemove(cart)}
                    className="pl-4 bg-red-400 px-4 py-2 rounded-lg items-end"
                  >
                    x
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
