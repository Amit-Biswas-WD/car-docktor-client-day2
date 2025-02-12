import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Main from "../layout/Main";
import Login from "../page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
