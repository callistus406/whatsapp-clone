import React from "react";
import styled from "styled-components";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(255,255,255,0.2)",
      },
    },
  },
});
const StyledDialogContent = styled(DialogContent)`
  && {
    min-width: 25rem;
    height: 12rem;
  }
`;
const StyledOkButton = styled(Button)`
  && {
    background-color: #0aa545;
    color: #fff;
    &:hover {
      background-color: #0aa545;
      &:hover {
     
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    }
  }
`;
const StyledCancelButton = styled(Button)`
  && {
    color: #0aa545;
    background: white;
    border: 1px solid #f0f0f0;
    transition: 0.2s;
    &:hover {
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  }
`;
export default function Meee(props) {
  const [open, setOpen] = React.useState(false);
  const [elevation, setElevation] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Choose Theme</DialogTitle>
        <StyledDialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="light"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="Light"
                />
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Dark"
                />
                <FormControlLabel
                  value="default"
                  control={<Radio />}
                  label="System default"
                />
              </RadioGroup>
            </FormControl>
          </DialogContentText>
        </StyledDialogContent>
        <DialogActions>
          <StyledCancelButton
            variant="contained"
            onMouseEnter={setElevation}
            disableElevation
            // disableElevation={elevation ? false : true}
            onClick={handleClose}
          >
            CANCEL
          </StyledCancelButton>
          <StyledOkButton onClick={handleClose} autoFocus>
            OK
          </StyledOkButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
