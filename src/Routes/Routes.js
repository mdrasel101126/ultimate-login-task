import ErrorPage from "../ErrorPage/ErrorPage";
import Authenticate from "../Layout/Authenticate";
import Attendence from "../Pages/Attendence/Attendence";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Attendence></Attendence>,
      },
    ],
  },
  {
    path: "/register",
    element: <Authenticate></Authenticate>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/register/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/register/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default routes;
