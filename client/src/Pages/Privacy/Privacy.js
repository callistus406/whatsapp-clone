import React from "react";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledPrivacyHeader,
  StyledPrivacyContent,
  StyledPrivacyLinksContainer,
  StyledPrivacyTextContainer,
} from "./style.js";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function Privacy({ handleClickAction, toggle }) {
  console.log(toggle);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <StyledContainer toggle={toggle} width="28rem">
      <StyledPrivacyHeader>
        <div className="navArrow">
          <StyledNavArrow display={toggle}>
            <div className="">
              <StyledArrowBackIcon onClick={() => handleClickAction(false)} />
            </div>
            <p>Security</p>
          </StyledNavArrow>
        </div>
      </StyledPrivacyHeader>
      <StyledPrivacyContent toggle={toggle} width="28rem">
        <div className="iconCont">
          <div className="icon"></div>
        </div>
        <StyledPrivacyLinksContainer>
          <StyledPrivacyTextContainer>
            <p>
              Messages and calls in end-to-end encrypted chats stay between you
              and the people you choose. Not even WhatsApp can read or listen to
              them. <a href="#">Learn More...</a>
            </p>
          </StyledPrivacyTextContainer>
          <StyledPrivacyTextContainer>
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
          </StyledPrivacyTextContainer>
        </StyledPrivacyLinksContainer>
      </StyledPrivacyContent>
    </StyledContainer>
  );
}

export default Privacy;
