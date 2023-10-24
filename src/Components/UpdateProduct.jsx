import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id } = product;
 const navigate = useNavigate();
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    // Collect values from the form fields
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;

    const updatedProduct = {
      name,
      brand,
      type,
      price,
      image,
      description,
      rating,
    };
    console.log(updatedProduct);
    // Send a PUT request to update the product
    fetch(`http://localhost:5000/product/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
         Swal.fire({
           text: "Product updated Successfully",
           icon: "success",
           confirmButtonText: "Done",
         });
         navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleUpdateProduct}
        className="bg-white shadow-md rounded px-8 py-8 sm:py-6 lg:py-10 mb-4"
      >
        {/* <!-- Name and Brand Name (2 columns on large screens) --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              className="w-full py-2 px-3 text-gray-700 leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              defaultValue={product.name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="brand"
            >
              Brand Name
            </label>
            <input
              className="w-full py-2 px-3 text-gray-700 leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="brand"
              type="text"
              defaultValue={product.brand}
            />
          </div>
        </div>

        {/* <!-- Type and Price (2 columns on large screens) --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="type"
            >
              Type
            </label>
            <input
              className="w-full py-2 px-3 text-gray-700 leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="type"
              type="text"
              defaultValue={product.type}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="price"
            >
              Price
            </label>
            <input
              className="w-full py-2 px-3 text-gray-700 leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="price"
              type="text"
              defaultValue={product.price}
            />
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="image"
          >
            Image
          </label>
          <input
            className="w-full py-2 px-3 text-gray-700 leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="image"
            type="text"
            accept="image/*"
            defaultValue={product.image}
          />
        </div>

        {/* <!-- Short Description --> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            Short Description
          </label>
          <textarea
            className="w-full py-2 px-3 text-gray-700 leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="description"
            rows="4"
            defaultValue={product.description}
          ></textarea>
        </div>

        {/* <!-- Rating --> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="rating"
          >
            Rating
          </label>
          <input
            className="w-full py-2 px-3 text-gray-700 leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="rating"
            type="number"
            defaultValue={product.rating}
            min="0"
            max="5"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
