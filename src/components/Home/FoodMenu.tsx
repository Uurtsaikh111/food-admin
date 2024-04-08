import { Button, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { CategoryModal } from "./CategoryModal";
type dataType = {
  _id: string;
  name: string;
};
export const FoodMenu = () => {
  const [data, setData] = useState<dataType[] | null>(null);
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
  const deleteSubmit = async (e: any) => {
    e.preventDefault();
    const createData = {
      id: e.target.id.value,
    };
    const res = await fetch("http://localhost:4000/api/category", {
      body: JSON.stringify(createData),
      method: "Delete",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const delData = await res.json();
    console.log(delData);
   const newData = data?.filter((a:dataType)=>a._id !=e.target.id.value);
   console.log("newData",newData)
    setData(newData);
  };

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
              px={2}
              border={"1px solid #D6D8DB"}
              justifyContent={"space-between"}
              direction={"row"}
              borderRadius={1}
            >
              <Typography
                display={"flex"}
                fontSize={"18px"}
                fontWeight={550}
                alignItems={"center"}
              >
                {a.name}
              </Typography>
              <form onSubmit={deleteSubmit} className="flex gap-5">
                <Button
                  name="id"
                  value={a._id}
                  type="submit"
                  sx={{ color: "#18BA51" }}
                >
                  del
                </Button>
              </form>
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
