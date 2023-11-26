import { RouterProvider } from "react-router-dom";
import "./App.css";
import appRoute from "./routes";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme/typography";

function App() {
   return (
      <ThemeProvider theme={customTheme}>
         <RouterProvider router={appRoute} />
      </ThemeProvider>
   );
}

export default App;
