import {
CardMedia,
Stack,
Typography,
  } from "@mui/material";
  import React from "react";

import { CardButtons } from "./CardButtons";
import { foodType } from "./types/foodtype";

  
  export const Card = ({ data }: { data: foodType}) => {
 return (
      <Stack>
        <Stack >
          <Stack
          position={"relative"}
          ><CardMedia
            component={"img"}
            src={data.image}
            width={282}
            height={186}
            alt=""
          />
           <Stack position={"absolute"}><CardButtons data={data}/></Stack>
          </Stack>
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
  