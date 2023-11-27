import styled from "@emotion/styled";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilBox = styled(Box)({
   margin: "20px",
   marginTop: "60px",
   height: "150px",
   color: "#fff",
});
const SectionText = styled(Typography)({
   fontSize: "20px",
   fontWeight: "600",
   color: "grey",
   cursor: "pointer",
});

function Sidebar() {
   const navigate = useNavigate();
   return (
      <Box
         width="20%"
         m={2}
         display="flex"
         flexDirection="column"
         alignItems="center"
      >
         <ProfilBox mt={3}>
            <Avatar />
            <Typography mt={1} fontSize="25px">
               John Doe
            </Typography>
            <Typography mt={1} fontSize="13px" color="grey">
               johndoe@email.com
            </Typography>
         </ProfilBox>
         <Stack spacing={3}>
            <SectionText onClick={() => navigate("/")}>Dashboard</SectionText>
            <SectionText>Expenses</SectionText>
            <SectionText onClick={() => navigate("/addExpenses")}>
               Add Expenses
            </SectionText>
            <SectionText>Summery </SectionText>
            <SectionText>Settings</SectionText>
            <SectionText>Logout</SectionText>
         </Stack>
      </Box>
   );
}

export default Sidebar;
