import React from 'react';
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledSecurityHeader,
  StyledSecurityContent,
  StyledSecurityLinksContainer,
  StyledSecurityTextContainer,
  StyledShowSecurityNotification,
  StyledEncryptionList,
  StyledBorderBottom,
} from './style.js';
import {
  PhoneIcon,
  LocationIcon,
  StatusIcon,
  AttachmentIcon,
  ChatIcon,
  SecurityIcon,
} from './svgIcons';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { QuestionAnswer, PhoneOutlined, CheckBox } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
function Security({ handleClickAction, toggle }) {
  const encryptDetails = [
    {
      icon: <ChatIcon />,
      info: 'Text and voice messages ',
    },
    {
      icon: <PhoneIcon />,
      info: 'Audio and video calls  ',
    },
    {
      icon: <AttachmentIcon />,
      info: 'Photos,videos and documents  ',
    },
    {
      icon: <LocationIcon />,
      info: 'Location sharing  ',
    },
    {
      icon: <StatusIcon />,
      info: 'Status update  ',
    },
  ];
  console.log(toggle);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const StyledCheckBox = styled(Checkbox)(({ theme }) => ({
    '&.Mui-checked': {
      color: '#008069',
    },
  }));
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
          <div className="icon">
            <SecurityIcon />
          </div>
        </div>
        <StyledSecurityLinksContainer>
          <h3 className="header">Your Chats and calls are private </h3>
          <StyledSecurityTextContainer>
            <div className="para">
              <p>
                End-to-End Encryption keeps your personal messages and calls
                between you and the people you choose.Not even Whatsapp can read
                or listen to them. This includes Your:
              </p>
            </div>
            <StyledEncryptionList>
              {encryptDetails.map((element) => {
                return (
                  <div className="encryptionCont">
                    <span>{element.icon}</span>
                    <span>{element.info} </span>
                  </div>
                );
              })}
              <div>
                <a href="#">Learn More</a>
              </div>
            </StyledEncryptionList>
          </StyledSecurityTextContainer>
          <StyledBorderBottom />
          <StyledShowSecurityNotification>
            <div>
              <FormControlLabel
                control={
                  <StyledCheckBox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                }
                label="Show security notifications on this computer"
              />
            </div>
            <div className="info">
              <p>
                Get notified when your security code changes for a contact’s
                phone. If you have multiple devices, this setting must be
                enabled on each device where you want to get notifications.{' '}
                <a href="#">Learn more</a>
              </p>
            </div>
          </StyledShowSecurityNotification>
        </StyledSecurityLinksContainer>
      </StyledSecurityContent>
    </StyledContainer>
  );
}
export default Security;
