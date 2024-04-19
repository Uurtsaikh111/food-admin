import { Button, Stack, Typography } from "@mui/material";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { CategoryModal } from "./CategoryModal";
import { MenuButtons } from "./MenuButtons";
type dataType = {
  _id: string;
  name: string;
};
export const FoodMenu = ({
  setMenu,
}: {
  setMenu: Dispatch<SetStateAction<string>>;
}) => {
  const [data, setData] = useState<dataType[] | null>(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const handleSubmit = async () => {
      const res = await fetch("https://food-be-three.vercel.app/api/category", {
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
  

  return (
    <Stack width={"282px"} py={"26px"} px={3} bgcolor={"white"} gap={"40px"}>
      <Typography fontSize={"22px"} fontWeight={700}>
        Food menu
      </Typography>
      <Stack gap={"26px"}>
        {data?.map((a, id) => {
          return (
            <Stack
              key={id}
              pl={2}
              border={"1px solid #D6D8DB"}
              justifyContent={"space-between"}
              direction={"row"}
              borderRadius={1}
              sx={{cursor:"pointer"}}
            >
              <Typography
                display={"flex"}
                fontSize={"18px"}
                fontWeight={500}
                alignItems={"center"}
                onClick={() => setMenu(a.name)}
              >
                {a.name}
              </Typography>
              <MenuButtons a={a} data={data} setData={setData}/>
            </Stack>
          );
        })}
        <Stack
          onClick={handleOpen}
          px={2}
          py={0.3}
          border={"1px solid #D6D8DB"}
          borderRadius={1}
        >
          <Button sx={{ color: "grey" }}>+ Create new category</Button>
        </Stack>
        <CategoryModal
          handleClose={handleClose}
          open={open}
          setData={setData}
          getData={data}
        />
      </Stack>
    </Stack>
  );
};
