import { Box, Typography, styled } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import data from "../../utils/constants";

const CustomCard = styled(Box)({
   backgroundColor: "#fff",
   height: "50px",
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
});
function Revenue() {
   return (
      <Box>
         <Typography>Today</Typography>
         <Box height="320px" width="100%">
            {data.map((item) => (
               <CustomCard m={1} key={item.name}>
                  <Box display="flex">
                     <Box
                        borderRadius="26px"
                        width="50px"
                        height="50px"
                        justifyContent="center"
                        display="flex"
                        alignItems="center"
                        bgcolor={item.color}
                     >
                        {item.icon}
                     </Box>
                     {/* <Avatar sx={{ marginLeft: "5px" }} icon={<ShoppingCartIcon/>} /> */}
                     <Box width="200px" ml={2}>
                        <Typography>{item.name}</Typography>
                        <Typography fontSize="11px" fontWeight="400">
                           5:12 pm Belanja di pasker
                        </Typography>
                     </Box>
                  </Box>
                  <DeleteIcon sx={{ color: "red" }} />
                  <Typography fontWeight="600" mr={1}>
                     {item.amount}
                  </Typography>
               </CustomCard>
            ))}
         </Box>
      </Box>
   );
}

export default Revenue;
