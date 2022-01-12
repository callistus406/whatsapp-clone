import React from "react";
import styled from "styled-components";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "react-contexify/dist/ReactContexify.css";

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
  }
`;
const StyledCancelButton = styled(Button)`
  && {
    color: #0aa545;
  }
`;
export default function Meee(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
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
            <StyledCancelButton onClick={handleClose}>
              CANCEL
            </StyledCancelButton>
            <StyledOkButton onClick={handleClose} autoFocus>
              OK
            </StyledOkButton>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
