import React from "react";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledSecurityHeader,
  StyledSecurityContent,
  StyledSecurityLinksContainer,
  StyledSecurityTextContainer,
  StyledShowSecurityNotification,
} from "./style.js";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function Security({ handleClickAction, toggle }) {
  console.log(toggle);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <StyledContainer toggle={toggle} width="28rem">
      <StyledSecurityHeader>
        <div className="navArrow">
          <StyledNavArrow display={toggle}>
            <div className="">
              <StyledArrowBackIcon onClick={() => handleClickAction(false)} />
            </div>
            <p>Security</p>
          </StyledNavArrow>
        </div>
      </StyledSecurityHeader>
      <StyledSecurityContent toggle={toggle} width="28rem">
        <div className="iconCont">
          <div className="icon"></div>
        </div>
        <StyledSecurityLinksContainer>
          <StyledSecurityTextContainer>
            <p>
              Messages and calls in end-to-end encrypted chats stay between you
              and the people you choose. Not even WhatsApp can read or listen to
              them. <a href="#">Learn More...</a>
            </p>
          </StyledSecurityTextContainer>
          <StyledShowSecurityNotification>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                }
                label="Show security notifications on this computer"
              />
            </div>
            <p>
              Get notified when your security code changes for a contact’s
              phone. If you have multiple devices, this setting must be enabled
              on each device where you want to get notifications.{" "}
              <a href="#">Learn More...</a>
            </p>
          </StyledShowSecurityNotification>
        </StyledSecurityLinksContainer>
      </StyledSecurityContent>
    </StyledContainer>
  );
}
export default Security;
