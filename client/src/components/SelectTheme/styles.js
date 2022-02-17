import styled from "styled-components";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import DialogContent from "@mui/material/DialogContent";

export const StyledDialogContent = styled(DialogContent)`
  && {
    min-width: 25rem;
    height: 12rem;
  }
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    font-size: 0.5rem;
  }
`;
export const StyledOkButton = styled(Button)`
    && {
      background-color: #0aa545;
      color: #fff;
      &:hover {
        background-color: #0aa545;
        &:hover {
       
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    }
    }
  `;
export const StyledCancelButton = styled(Button)`
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
