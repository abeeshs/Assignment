import {
   Box,
   Button,
   Card,
   TextField,
   Typography,
   styled,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const FormCard = styled(Card)({
   backgroundColor: "#fff",
   width: "470px",
   height: "460px",
   borderRadius: "20px",
   padding: "20px",
   display: "flex",
   justifyContent: "center",
});
const CustomTextField = styled(TextField)({
   "& .MuiInputBase-root": {
      width: "350px",
      height: "50px",
      borderRadius: "15px",
   },
});
const CommonText = styled(Typography)({
   fontWeight: "500",
   fontSize: "13px",
});

const SignInBtn = styled(Button)({
   backgroundColor: "#DC3434",
   color: "#fff",
   borderRadius: "12px",
   height: "45px",
   ":hover": {
      backgroundColor: "#DC3432",
   },
});

function SignIn() {
   const navigate = useNavigate();
   // Function to hanldle sing in
   const handleSignIn = () => {
      // Write the sign in logic here---->
   };
   return (
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         height="100vh"
      >
         <FormCard>
            <Box mt={3}>
               <Typography
                  fontSize="40px"
                  fontWeight="600"
                  fontFamily="'Poppins',sans-serif"
               >
                  Login
               </Typography>
               <Box height="250px" display="flex" flexDirection="column">
                  <CommonText mt={4}>Email</CommonText>
                  <CustomTextField
                     hiddenLabel
                     id="filled-hidden-label-small"
                     placeholder="Your email address"
                  />
                  <CommonText mt={4}>Password</CommonText>
                  <CustomTextField
                     hiddenLabel
                     id="filled-hidden-label-small"
                     placeholder="Your password"
                     fullWidth
                  />
               </Box>
               <Box>
                  <SignInBtn onClick={handleSignIn} fullWidth>
                     SIGN IN
                  </SignInBtn>
               </Box>
               <CommonText ml={2} mt={1}>
                  Do not have an account?
                  <span
                     style={{ color: "#006BF0",cursor:'pointer' }}
                     onClick={() => navigate("/signUp")}
                  > register now</span>
               </CommonText>
            </Box>
         </FormCard>
      </Box>
   );
}

export default SignIn;
