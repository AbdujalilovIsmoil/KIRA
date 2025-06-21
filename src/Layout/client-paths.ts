import { lazy } from "react";

const Home = lazy(() => import("Pages/Client/Home"));
const NotFound = lazy(() => import("Pages/Client/NotFound"));

export { Home, NotFound };
