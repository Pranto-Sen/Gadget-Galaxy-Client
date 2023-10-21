import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import UpdateProduct from './UpdateProduct';

const Brand = () => {
  const { brand } = useParams();
  const [brands, setBrands] = useState([]);
  const handleClick = () => {
    fetch(`http://localhost:5000/${brand}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data);
      });
  };
  handleClick();

  return (
    <div className="grid grid-cols-3">
      {brands.map((brand) => (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <img class="p-8 rounded-t-lg" src={brand.image} alt="product image" />

          <div class="px-5 pb-5">
            <h5 class="text-2xl pb-4 font-semibold tracking-tight text-gray-900">
              {brand.name}
            </h5>
            <div className="flex justify-between">
              <h5 class="text-l pb-4 font-semibold tracking-tight text-gray-900 ">
                {brand.brand}
              </h5>
              <span class="text-3xl font-bold text-gray-900 ">$599</span>
            </div>
            {/* rating */}
            <div className="rating">
              {brand.rating}
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>

            <div class="flex items-center justify-between pt-4">
              <Link
                to={`/updateproduct/${brand._id}`}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </Link>
              <Link
                to={`/productdetails/${brand._id}`}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;
