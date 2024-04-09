import { CategoryFoods, FoodMenu } from "@/components/Home";
import { Container, Stack } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState("661115b8f8cf2d64a533cf7f")
  return (
    <>
      <Head>
        <title>Food Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
       <Stack bgcolor={"#F7F7F8"}>
        <Container maxWidth={"lg"}>
           <Stack direction={"row"} gap={4}>
             <FoodMenu setMenu={setMenu}/>
             <CategoryFoods menu={menu}/>
           </Stack>
         </Container>
       </Stack>
      </>
    </>
  );
}
