import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white shadow-md p-4">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
          {/* <!-- Left Side - Logo --> */}
          <div class="text-black text-2xl font-semibold">
            <a href="#">Your Logo</a>
          </div>

          {/* <!-- Middle - Navigation Links --> */}
          <div class="flex space-x-4 md:space-x-8 text-black">
            <Link to="/">Home</Link>
            <Link to="/addproduct">Add Product</Link>
            <Link to="/mycart">My Cart</Link>
          </div>

          {/* <!-- Right Side - Login and Register --> */}
          <div class="flex space-x-4 md:space-x-8 text-black">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </div>
      </nav>

      {/* <!-- Content of your website goes here --> */}
    </div>
  );
};

export default Navbar;