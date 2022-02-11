import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";
export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const StyledButton = muiStyled(Button)(({ theme }) => ({
    backgroundColor: "#008069",
    minWidth: "4rem",
    color: "#fff",
    "&:hover": {
      background: "#017561",
    },
    marginRight: "1rem",
    marginBottom: "1rem",
  }));
  const StyledDialogTitle = muiStyled(DialogTitle)(({ theme }) => ({
    color: "#55626A",
    fontSize: "0.9rem",
  }));
  const StyledDialog = muiStyled(Dialog)(({ theme }) => ({}));
  const StyledSpace = styled.div`
    ${"" /* height: 1rem; */}
    width: 23rem;
  `;
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <StyledDialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledDialogTitle id="alert-dialog-title">
          Only admins can edit this group's info
        </StyledDialogTitle>
        <DialogContent>
          <StyledSpace>
            {/* Only admins can edit this group's info */}
          </StyledSpace>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleClose} autoFocus>
            OK
          </StyledButton>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
