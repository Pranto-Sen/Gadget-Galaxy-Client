import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
import { AuthContext } from "../Providers/AuthProvider";

const Brand = () => {
  const { brand } = useParams();
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = () => {
    fetch(
      `https://technology-and-electronics-server-jciw16uv3.vercel.app/${brand}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data);
        setIsLoading(false);
      });
  };
  handleClick();

  return (
    <div>
      <div className="carousel max-h-[500px] w-full mt-8 rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Dr8MXqQ/Screenshots-3313.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/gdQWnkv/Screenshots-3311.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/j8QfZD2/Screenshots-3314.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/GstnTdp/marvin-meyer-SYTO3xs06f-U-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-3 ">
        {isLoading ? (
          <p className="font-semibold text-4xl text-center pt-8">Loading...</p>
        ) : brands.length > 0 ? (
          brands.map((brand) => (
            <div class="w-full max-w-sm mb-8 bg-white border border-gray-200 rounded-lg shadow ">
              <img
                class="mx-auto py-4 rounded-t-lg h-80"
                src={brand.image}
                alt="product image"
              />

              <div class="px-5 pb-5">
                <h5 class="text-2xl pb-4 font-semibold tracking-tight text-gray-900">
                  {brand.name}
                </h5>
                <div className="flex justify-between">
                  <h5 class="text-l pb-4 font-semibold tracking-tight text-gray-900 ">
                    {brand.brand}
                  </h5>

                  <span class="text-3xl font-bold text-gray-900 ">
                    {brand.price}
                  </span>
                </div>
                <h5 class="text-l pb-4 font-semibold tracking-tight text-gray-900 ">
                  {brand.type}
                </h5>
                {/* rating */}
                <div className="rating">
                  <p className="font-bold text-xl">{brand.rating}</p>
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 ml-2"
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
          ))
        ) : (
          <p className="font-semibold text-4xl text-center pt-8">
            No Product Available
          </p>
        )}
      </div>
    </div>
  );
};

export default Brand;

