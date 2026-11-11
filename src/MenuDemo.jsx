import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const MenuDemo = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
        Open Menu Again
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Balance</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MenuDemo;
