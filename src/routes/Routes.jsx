import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Main from "../layout/Main";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import About from "../page/About";
import Services from "../page/Services";
import Blog from "../page/Blog";
import Contact from "../page/Contact";
import CheckOut from "../page/checkOut/CheckOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
