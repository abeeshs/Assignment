import {
   Box,
   Button,
   LinearProgress,
   Typography,
   linearProgressClasses,
   styled,
} from "@mui/material";
import React from "react";
import data from "../../utils/constants";
import Illustration from "../../assets/png/Illustration.png";
import Illustration1 from "../../assets/png/Illustration (1).png";

const ViewTipsBtn = styled(Button)({
   backgroundColor: "black",
   color: "#fff",
   width: "200px",
   marginTop:"10px"
});

const SaveMoneyBox = styled(Box)({
   height: "220px",
   width: "100%",
   backgroundColor: "#EDF0F6",
   margin: "50px 10px 10px 10px",
   position: "relative",
   borderRadius: "12px",
});

const ImageBox = styled(Box)({
   display: "flex",
   width: "90%",
   position: "absolute",
   justifyContent: "space-between",
   top: "-21px",
   height: "100px",
   padding: "0px 10px 10px 10px",
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
   height: 10,
   borderRadius: 5,
   [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
         theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
   },
   [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#31BA96" : "#31BA96",
   },
}));

function ProgressSection() {
   return (
      <Box  width="100%">
         <Typography fontWeight="600">Where your money go?</Typography>
         {data.map((item) => (
            <Box mt={4} key={item.name}>
               <Box display="flex" justifyContent="space-between">
                  <Typography>{item.name}</Typography>
                  <Typography>872.400</Typography>
               </Box>
               <BorderLinearProgress variant="determinate" value={50} />
            </Box>
         ))}

         <SaveMoneyBox>
            <ImageBox>
               <img src={Illustration} alt="img" />
               <img src={Illustration1} height="100px" alt="img" />
            </ImageBox>
            <Box position="absolute" top="80px" p={1} display="flex" flexDirection="column" alignItems="center">
               <Typography>Save more money</Typography>
               <Typography>
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim.
               </Typography>
               <ViewTipsBtn>VIEW TIPS</ViewTipsBtn>
            </Box>
         </SaveMoneyBox>
      </Box>
   );
}

export default ProgressSection;
