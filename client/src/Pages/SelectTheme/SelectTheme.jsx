import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import {
  StyledDialogContent,
  StyledFormControlLabel,
  StyledOkButton,
  StyledCancelButton,
} from "./styles";

function SelectTheme({ handleClickAction, toggle }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={toggle}
        onClose={handleClickAction}
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
                size="large"
              >
                <StyledFormControlLabel
                  value="light"
                  control={<Radio size="small" />}
                  label="Light"
                />
                <StyledFormControlLabel
                  value="dark"
                  control={<Radio size="small" />}
                  label="Dark"
                />
                <StyledFormControlLabel
                  value="default"
                  control={<Radio size="small" />}
                  label="System default"
                />
              </RadioGroup>
            </FormControl>
          </DialogContentText>
        </StyledDialogContent>
        <DialogActions>
          <StyledCancelButton
            variant="contained"
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

export default SelectTheme;
