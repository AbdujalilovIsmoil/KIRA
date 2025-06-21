import Layout from "./Layout";
import { Home, NotFound } from "./client-paths";
import { createBrowserRouter } from "react-router-dom";
import { Login, Registration } from "./authorization-paths";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    element: <Login />,
    path: "/pages/login",
  },
  {
    element: <Registration />,
    path: "/pages/registration",
  },
]);

export default routes;
