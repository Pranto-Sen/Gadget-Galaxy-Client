import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from './Components/AddProduct.jsx';
import UpdateProduct from './Components/UpdateProduct.jsx';
import Home from './Components/Home';
import Root from './Components/Root';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: <AddProduct ></AddProduct>,
      },
      {
        path: "/updateproduct",
        element: <UpdateProduct></UpdateProduct>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
