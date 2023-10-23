import React, { useContext, useState } from "react";
// import google from "../images/google.png";
// import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "./Providers/AuthProvider";
// import Swal from "sweetalert2";
// import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

//   const { createUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);
    setRegisterError("");
    setRegisterSuccess("");

    if (password.length < 6) {
      console.log("passssssss");
      setRegisterError("at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      console.log("passssssss");
      setRegisterError("at least 1 capital letter");
    } else if (!/[@#$%^&+=!]/.test(password)) {
      setRegisterError("at least 1 special character");
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://i.ibb.co/FgrXW5p/profile-3135715.png",
        });
        Swal.fire({
          text: "Register Successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
//   const handleGoogleClick = () => {
//     console.log("inside goo");
//     googleLogin()
//       .then((res) => {
//         console.log(res);
//         Swal.fire({
//           text: "Register Successfully",
//           icon: "success",
//           confirmButtonText: "Done",
//         });
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

  return (
    <div>
      <section class="flex flex-col md:flex-row h-screen items-center">
        <div
          class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div class="w-full h-100">
            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12 text-center">
              Register to your account
            </h1>

            <form onSubmit={handleRegister} class="mt-6" method="POST">
              <div>
                <label class="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter Your Name"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                ></input>
              </div>
              <div class="mt-4">
                <label class="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Email Address"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                ></input>
              </div>

              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Password"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 
                focus:bg-white focus:outline-none"
                ></input>
              </div>
              {registerError && <p className="text-red-700">{registerError}</p>}

              <button
                type="submit"
                class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Register
              </button>
            </form>

            <button
            //   onClick={handleGoogleClick}
              type="submit"
              class="flex w-full bg-slate-200  text-black font-semibold rounded-lg
               py-3 mt-6 "
            >
              {/* <img src={google} className="w-6 h-6 mr-4 ml-24"></img> */}
              Log In with Google
            </button>

            <p class="mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                class="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
