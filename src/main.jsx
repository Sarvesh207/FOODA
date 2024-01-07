import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./CSS/index.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/restaurant/:id",
//         element: <RestaurantMenu />,
//       },
//       {
//         path: "/search",
//         element: <Search />,
//       },
//       {
//         path: "/search-item",
//         element: <SearchedItem />,
//       },
//       {
//         path: "/nav",
//         element: <Header />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
);
