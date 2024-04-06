import {  Box, Button, Stack, Typography} from "@mui/material"

export const CategoryFoods= ()=>{
    return(
        <Stack width={"75%"} py={3}>
           <Box  py={2} display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"22px"} fontWeight={700}>Breakfast</Typography>
              <Button
               sx={{color:"white", backgroundColor:"#18BA51"}}
              >Add new food</Button>
           </Box>
           <Stack></Stack>
        </Stack>
       
    )
}