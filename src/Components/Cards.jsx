import React from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";

const Cards = ({ item }) => {
    const {  brand, details, image } = item;
  
    return (
      <Link to={`/${brand}`} className="md:mx-auto">
        <div>
          <div className="card md:min-w-fit h-[400px] lg:w-96 bg-base-100 shadow-xl mb-12">
            <figure className="">
              <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{brand}</h2>
              {details.length > 110 ? (
                <p>{details.slice(0, 110)} .....</p>
              ) : (
                <p>{details}</p>
              )}

            
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Cards;
