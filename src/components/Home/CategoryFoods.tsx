import {  Box, Button, Stack, Typography} from "@mui/material"
import React, { useEffect, useState } from "react";
import { FoodModal } from "./FoodModal";
interface dataType {
    _id:string,
    name: string,
    }
export const CategoryFoods= ()=>{
    const [data,setData]=useState<dataType[] | null > (null)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const handleSubmit = async () => {
         const res = await fetch("http://localhost:4000/api/category", {
                 method: "GET",
                 mode: "cors",
                 headers: {
                   Accept: "application.json",
                   "Content-Type": "application/json",
                 },
               });
         const datas = await res.json();
         setData(datas.categories);
        };
        
        handleSubmit();
    }, []);

    return(
        <Stack width={"75%"} py={3}>
           <Box  py={2} display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"22px"} fontWeight={700}>Breakfast</Typography>
              <Stack><Button
              onClick={handleOpen}
               sx={{color:"white", backgroundColor:"#18BA51"}}
              >Add new food</Button>
                <FoodModal data={data} handleClose={handleClose} open={open}/>
              </Stack>
           </Box>
           <Stack></Stack>
        </Stack>
       
    )
}