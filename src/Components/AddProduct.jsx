import React from "react";

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;

        const addProduct = { name, brand, type, price, image, description, rating }
        // console.log(data);

        fetch("http://localhost:5000/addProduct", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
    }
   
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleAddProduct} className="bg-white shadow-md rounded px-8 py-8 sm:py-6 lg:py-10 mb-4">
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
              placeholder="Product Name"
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
              placeholder="Brand Name"
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
              placeholder="Product Type"
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
              placeholder="Product Price"
            />
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="image">
            Image
          </label>
          <input
            className="w-full py-2 px-3 text-gray-700 leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="image"
            type="text"
            accept="image/*"
            placeholder="Upload an image"
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
            placeholder="Short Description"
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
            placeholder="Product Rating"
            min="0"
            max="5"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
