import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const data = [
   {
      color: "#32A7E2",
      icon: <ShoppingCartIcon sx={{ color: "#fff" }} />,
      name: "Grocery",
      amount: "-362.800",
   },
   {
      color: "#B548C6",
      icon: <DirectionsBusIcon sx={{ color: "#fff" }} />,
      name: "Transportation",
      amount: "-362.800",
   },
   {
      color: "#FF8700",
      icon: <HomeIcon sx={{ color: "#fff" }} />,
      name: "Housing",
      amount: "-362.800",
   },
   {
      color: "#DC3434",
      icon: <RamenDiningIcon sx={{ color: "#fff" }} />,
      name: "Food and Drink",
      amount: "-362.800",
   },
   {
      color: "#DC3434",
      icon: <PlayCircleIcon sx={{ color: "#fff" }} />,
      name: "Entertainment",
      amount: "-362.800",
   },
];

export default data;
