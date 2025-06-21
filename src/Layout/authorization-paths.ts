import { lazy } from "react";

const Login = lazy(() => import("Pages/Authorization/Login"));
const Registration = lazy(() => import("Pages/Authorization/Registeration"));

export { Login, Registration };
