import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
// import { AuthContext } from './../Providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignout= () => {
    logOut()
      .then()
    .catch()
  }
  return (
    <div>
      <nav class="bg-white shadow-md p-4">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
          {/* <!-- Left Side - Logo --> */}
          <div class="text-black text-2xl font-semibold flex justify-center items-center">
            <img
              className="w-16 mr-2 rounded-2xl"
              src="https://i.ibb.co/tZsm74p/glowing-filament-ignites-ideas-innovative-solutions-generated-by-ai.jpg"
            ></img>
            <h2 className="font-bold text-2xl">Gadget Galaxy</h2>
          </div>

          {/* <!-- Middle - Navigation Links --> */}
          <div class="flex space-x-4 md:space-x-8 text-black font-semibold text-lg">
            <Link to="/">Home</Link>
            <Link to="/addproduct">Add Product</Link>
            <Link to="/mycart">My Cart</Link>
          </div>

          {/* <!-- Right Side - Login and Register --> */}
          <div class="flex space-x-4 md:space-x-8 text-black font-semibold text-lg">
            <Link to="/register">Register</Link>
            {user ? (
              <div>
                {" "}
                <button onClick={handleSignout}>SignOut</button>{" "}
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
            {user && (
              <div className="flex items-center">
                <img
                  src={user.photoURL}
                  className="w-6 h-6 mr-2"
                  alt={user.displayName}
                />
                <p>{user.displayName}</p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* <!-- Content of your website goes here --> */}
    </div>
  );
};

export default Navbar;