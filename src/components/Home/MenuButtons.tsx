import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Stack, TextField } from '@mui/material';


type dataType = {
    _id: string;
    name: string;
  };

export const MenuButtons=({data,setData,a}:{ data:dataType[] | null, setData:React.Dispatch<React.SetStateAction<dataType[] | null >>,
    a:dataType
})=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteSubmit = async (e: any) => {
    e.preventDefault();
    const deleteData = {
      id: e.target.id.value,
    };
    const res = await fetch("https://food-be-three.vercel.app/api/category", {
      body: JSON.stringify(deleteData),
      method: "Delete",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const delData = await res.json();
    console.log(delData)
    const newData = data?.filter((a: dataType) => a._id != e.target.id.value);
    setData(newData as dataType[]);
  };
  const updateSubmit = async (e: any) => {
    e.preventDefault();
    const updateData = {
      id: e.target.id.value,
      updateInfo: e.target.updateInfo.value
    };
    const res = await fetch("http://localhost:4000/api/category", {
      body: JSON.stringify(updateData),
      method: "Put",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const updatedData = await res.json();
    console.log("updatedData",updatedData);
    if (updatedData.matchedCount) {
    handleClose()
    } else {
      alert("wrong category name");
    }
    handleClose()
  };
  

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
           <Stack px={2}> <form onSubmit={updateSubmit} className="flex gap-5">
           <Stack><TextField
                  // id="outline"
                  name='updateInfo'
                  placeholder="Name"
                  variant="outlined"
                  sx={{ backgroundColor: "#ECEDF0"}}
                />
                <Button
                  name="id"
                  value={a._id}
                  type="submit"
                  sx={{ color: "black", display:"flex", justifyContent:"flex-start"}}
                >
                  Edit name
                </Button></Stack>
            </form>
            <form onSubmit={deleteSubmit} className="flex gap-5">
                <Button
                  name="id"
                  value={a._id}
                  type="submit"
                  sx={{ color: "red" }}
                >
                  Delete Category
                </Button>
            </form>

            </Stack>
      </Menu>
    </div>
  );
}