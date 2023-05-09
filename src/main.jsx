import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./globalStyles.css";
import AboutMySelf from "./routers/AboutMySelf";
import Contacts from "./routers/Contacts";
import Projects from "./routers/Projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/AboutMySelf",
        element: <AboutMySelf />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
