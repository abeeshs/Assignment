import { Outlet, createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import { Box } from "@mui/material";
import Sidebar from "../components/sideBar/Sidebar";
import AddExpensesPage from "../pages/AddExpenses";
import ExpensesPage from "../pages/Expenses";

const AppLayout = () => {
   return (
      <Box display="flex" height="100vh" bgcolor="black">
         <Sidebar />
         <Outlet />
      </Box>
   );
};

const appRoute = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "",
            element: <ExpensesPage />,
         },
         {
            path: "/addExpenses",
            element: <AddExpensesPage />,
         },
      ],
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
