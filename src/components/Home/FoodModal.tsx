import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { CloseButton } from "../Images";
import UploadFile from "./Upload";
import { useRouter } from "next/router";
interface dataType {
  _id: string;
  name: string;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  bgcolor: "background.paper",
  px: 3,
};
export const FoodModal = ({
  data,
  handleClose,
  open,
}: {
  data: dataType[] | null;
  handleClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) => {
  const router = useRouter();
  const [category, setCategory] = React.useState("");
  const [name, setName] = React.useState("");
  const [ingredients, setIngredients] = React.useState<any>([]);
  const [image, setImage] = React.useState("");
  const [price, setPrice] = React.useState<any>(0);
  const [discount, setDiscount] = React.useState<any>(0);
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = async () => {
 

      const data = {
        name: name,
        categoryId: category,
        image: image,
        price: price,
        discount: discount,
        ingredients: ingredients,
      };

      const res = await fetch("http://localhost:4000/api/food", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });
      const datas = await res.json();
      console.log(datas);
      if (datas.name) {
        handleClose(false);
        router.push("/dashboard");
      } else {
        alert("wrong something");
      }
    
  };
  return (
    <Stack>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
            <Stack sx={style} borderRadius={1}>
              <Stack
                py={2}
                direction={"row"}
                justifyContent={"space-between"}
                borderBottom={"1px solid #E0E0E0"}
              >
                <Stack
                  onClick={() => handleClose(false)}
                  justifyContent={"center"}
                >
                  <CloseButton />
                </Stack>
                <Typography fontSize={"24px"} fontWeight={700}>
                  Create food
                </Typography>
                <Typography color={"white"}>icon</Typography>
              </Stack>
              <Stack py={3} gap={2}>
                <Stack gap={1}>
                  <Typography>Хоолны нэр</Typography>
                  <TextField
                    onChange={(e) => setName(e.target.value)}
                    required
                    id="outline"
                    type="name"
                    placeholder="Placeholder"
                    variant="outlined"
                    sx={{ backgroundColor: "#ECEDF0" }}
                  />
                </Stack>
                <Stack gap={1}>
                  <Stack>
                    <Typography>Хоолны ангилал</Typography>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl
                        fullWidth
                        sx={{ backgroundColor: "#ECEDF0" }}
                      >
                        <Select
                          id="demo-simple-select"
                          value={category}
                          onChange={handleChange}
                        >
                          {data?.map((cat, id) => {
                            return (
                              <MenuItem key={id} value={cat._id}>
                                {cat.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                  </Stack>
                </Stack>
                <Stack gap={1}>
                  <Typography>Хоолны орц</Typography>
                  <TextField
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                    id="outline"
                    value={ingredients}
                    placeholder="Placeholder"
                    variant="outlined"
                    sx={{ backgroundColor: "#ECEDF0" }}
                  />
                </Stack>
                <Stack gap={1}>
                  <Typography>Хоолны үнэ</Typography>
                  <TextField
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    id="outline"
                    placeholder="Placeholder"
                    variant="outlined"
                    sx={{ backgroundColor: "#ECEDF0" }}
                  />
                </Stack>
                <Stack gap={1}>
                  <Typography>Хямдралтай эсэх</Typography>
                  <TextField
                    onChange={(e) => setDiscount(e.target.value)}
                    required
                    id="outline"
                    placeholder="Placeholder"
                    variant="outlined"
                    sx={{ backgroundColor: "#ECEDF0" }}
                  />
                </Stack>
                <Stack gap={1}>
                  <Typography>Хоолны зураг</Typography>

                  <UploadFile
                    setImage={setImage}
                    setLoading={setLoading}
                    loading={loading}
                  />
                </Stack>
              </Stack>
              <Stack
                py={3}
                justifyContent={"flex-end"}
                direction={"row"}
                gap={2}
                borderTop={"1px #E0E0E0 solid"}
              >
                <Button>Clear</Button>
                <Button
                  onClick={handleSubmit}
                  sx={{
                    px: "16px",
                    py: "8px",
                    borderRadius: "8px",
                    backgroundColor: "#18BA51",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  Continue
                </Button>
              </Stack>
            </Stack>
   
      </Modal>
    </Stack>
  );
};
