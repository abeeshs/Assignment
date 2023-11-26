import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";

// const AppLayout = () => {
//    return (
//       <>
//          <Outlet />
//       </>
//    );
// };

const appRoute = createBrowserRouter([
   {
      path: "/",
      element: <Dashboard />,
   },
   {
      path: "/signIn",
      element: <SignIn />,
   },
   {
      path: "/signUp",
      element: <SignUp />,
   },
]);

export default appRoute;
