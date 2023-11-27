import styled from "@emotion/styled";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";

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
   width: "350px",
   backgroundColor: "#DC3434",
   color: "#fff",
   borderRadius: "12px",
   height: "45px",
   ":hover": {
      backgroundColor: "#DC3432",
   },
});

function AddExpenseForm() {
   //write your submit logic
   const handleSubmit = () => {};
   return (
      <Box>
         <Box height="450px" display="flex" flexDirection="column">
            <CommonText mt={4}>Expense Category</CommonText>
            <CustomTextField
               id="filled-select-currency"
               select
               placeholder="select"
            >
               <MenuItem value="none">Select</MenuItem>
            </CustomTextField>

            <CommonText mt={4}>Expense</CommonText>
            <CustomTextField
               hiddenLabel
               id="filled-hidden-label-small"
               placeholder="expense"
               fullWidth
            />
            <CommonText mt={4}>Date</CommonText>
            <CustomTextField
               hiddenLabel
               id="filled-hidden-label-small"
               placeholder="date"
               fullWidth
            />
            <CommonText mt={4}>Amount</CommonText>
            <CustomTextField
               hiddenLabel
               id="filled-hidden-label-small"
               placeholder="amount"
               fullWidth
            />
         </Box>
         <Box>
            <SignInBtn onClick={handleSubmit}>Submit</SignInBtn>
         </Box>
      </Box>
   );
}

export default AddExpenseForm;
