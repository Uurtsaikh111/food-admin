import {  Box, Button, Stack, Typography} from "@mui/material"
import React, { useEffect, useState } from "react";
import { FoodModal } from "./FoodModal";
import { Card } from "./Card";
interface dataType {
    _id:string,
    name: string,
    }

    interface dataFoodType {
      _id:string,
      name: string,
      categoryId:string,
      image:string,
      price:number,
      discount:number,
      ingredients:string[]
      }
export const CategoryFoods= ()=>{
    const [data,setData]=useState<dataType[] | null > (null)
    const [foodData,setFoodData]=useState<dataFoodType[] | null > (null)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [menu, setMenu] = useState("Maindish")

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

    useEffect(() => {
      const getAllData = async () => {
       const res = await fetch("http://localhost:4000/api/food", {
               method: "GET",
               mode: "cors",
               headers: {
                 Accept: "application.json",
                 "Content-Type": "application/json",
               },
             });
       const foodDatas = await res.json();
       setFoodData(foodDatas.foods);
      };
      console.log(foodData)
      getAllData();
  }, []);
  const filterFoods = foodData?.filter((item) => item.categoryId==menu);
  console.log("ssss",filterFoods)
    return(
        <Stack width={"75%"} py={3}>
           <Box  py={2} display={"flex"} justifyContent={"space-between"}>
           <Stack direction={"row"} gap={1} >
        {data?.map((cat,id)=>(
          <Button sx={{ width:"100px",  px:"16px", py:"8px",borderRadius:"8px", color:"black", border:"1px solid grey"}} onClick={()=>setMenu(cat._id)} key={id}>{cat.name}</Button>
        ))}
      </Stack>
             
              <Stack><Button
              onClick={handleOpen}
               sx={{color:"white", backgroundColor:"#18BA51"}}
              >Add new food</Button>
                <FoodModal data={data} handleClose={handleClose} open={open}/>
              </Stack>
           </Box>
           <Stack>
           <Stack direction={"row"} justifyContent={"space-between"} marginBottom={"86px"} flexWrap={"wrap"}>

{filterFoods?.map((cardData,id) =>(
<Card key={id} data={cardData} />
))}

</Stack>
           </Stack>
        </Stack>
       
    )
}