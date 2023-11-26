import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BarChart from "./BarChart";
import Revenue from "./Revenue";
import ProgressSection from "./ProgressSection";


function MainSection() {
   return (
      <Box borderRadius="15px" m={2} bgcolor="#fff" width="80%" display="flex">
         <Grid container bgcolor="">
            <Grid
               item
               xs={8}
               pt={4}
               pl={8}
               pr={4}
               pb={4}
            >
               <Box width="100%" height="100%" >
                  <Stack>
                     <Box
                        display="flex"
                        justifyContent="space-between"
                     >
                        <Typography fontSize="30px">Expenses</Typography>
                        <Stack direction="row" spacing={2}>
                           <Avatar
                              position="relative"
                              alt="Remy Sharp"
                              src="/static/images/avatar/1.jpg"
                           />
                           <Avatar
                              alt="Travis Howard"
                              src="/static/images/avatar/2.jpg"
                           />
                           <Avatar
                              alt="Cindy Baker"
                              src="/static/images/avatar/3.jpg"
                           />
                        </Stack>
                     </Box>
                     <Typography fontSize="11px" color="grey" mt={1}>01 - 25 March, 2020</Typography>
                     <Box height="200px" >
                        <BarChart />
                     </Box>
                     <Revenue />
                  </Stack>
               </Box>
            </Grid>
            <Grid item xs={4} sx={{padding:'30px 20px 20px 20px',borderRadius:"15px"}}  bgcolor="#F9FAFC">
              <ProgressSection/>
            </Grid>
         </Grid>
      </Box>
   );
}

export default MainSection;
