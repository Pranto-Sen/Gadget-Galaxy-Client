import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToLS } from '../utilities/localstorage';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const [cart, setCart] = useState([])
    const product = useLoaderData();
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
      addToLS(product);
      Swal.fire({
        text: "Add to Cart Successfully",
        icon: "success",
        confirmButtonText: "Done",
      });
    };
     console.log("click", cart);
    return (
      <div class="w-full mx-auto mt-4 max-w-xl bg-white border border-gray-200 rounded-lg shadow ">
        <img class="p-8 mx-auto rounded-t-lg" src={product.image} alt="product image" />

        <div class="px-5 pb-5">
          <h5 class="text-3xl pb-2 font-bold tracking-tight text-gray-900 ">
            {product.name}
          </h5>
          <p className='py-2 font-semibold'>{product.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-gray-900 ">
            Price :  {product.price}
            </span>

            <button
              onClick={() => handleAddProduct(product)}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;