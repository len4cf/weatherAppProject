import { useState } from "react";
import {
  Box,
  Alert,
  Collapse,
  Button,
  IconButton,
} from "@mui/material";
import { IoClose } from "react-icons/io5";

const Alerta = ({}) => {
  const [open, setOpen] = useState(false);


  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          style={{ backgroundColor: "#36f70f34" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <IoClose fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me
        </Alert>
      </Collapse>
      <Button
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      ></Button>
    </Box>
  );
}

export default Alerta;