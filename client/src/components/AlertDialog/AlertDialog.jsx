import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
function AlertDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const StyledButton = muiStyled(Button)(({ theme }) => ({
    backgroundColor: '#008069',
    minWidth: '4rem',
    color: '#fff',
    '&:hover': {
      background: '#017561',
    },
    marginRight: '1rem',
    marginBottom: '1rem',
  }));
  const StyledDialogTitle = muiStyled(DialogTitle)(({ theme }) => ({
    color: '#55626A',
    fontSize: '0.9rem',
  }));
  const StyledDialog = muiStyled(Dialog)(({ theme }) => ({
    backgroundColor: 'rgba(255,255,255,0.9)',
    boxShadow: 'none',
  }));
  const StyledSpace = styled.div`
    ${'' /* height: 1rem; */}
    width: 23rem;
  `;
  return (
    <div>
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

export default AlertDialog;
