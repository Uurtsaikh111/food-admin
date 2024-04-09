import {
CardMedia,
Stack,
Typography,
  } from "@mui/material";
  import React from "react";
  interface dataFoodType {
    _id:string,
    name: string,
    categoryId:{
      name:string,
      _id:string,
    }
    image:string,
    price:number,
    discount:number,
    ingredients:string[]
    }
  
  export const Card = ({ data }: { data: dataFoodType}) => {
 return (
      <Stack>
        <Stack >
          <CardMedia
            component={"img"}
            src={data.image}
            width={282}
            height={186}
            alt=""
          />
          <Stack px={1.5}>
            <Typography fontSize={"18px"} fontWeight={"600"}>
              {data.name}
            </Typography>
            <Stack direction={"row"} gap={1}>
              <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>
                {data.price}₮
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
            
        </Stack>
      </Stack>
    );
  };
  