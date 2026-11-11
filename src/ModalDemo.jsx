import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const ModalDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography>It is a Modal</Typography>
          <Button onClick={() => setOpen(false)}>Click Me</Button>
        </Box>
      </Modal>
    </>
  );
};

export default ModalDemo;
