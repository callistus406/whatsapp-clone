import React from 'react';
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledPrivacyHeader,
  StyledPrivacyContent,
  StyledPrivacyLinksContainer,
  StyledPrivacyTextContainer,
  StyledBorderBottom,
  StyledReadReceipts,
  StyledDisappearingMsg,
  StyledGroups,
} from './style.js';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

function Privacy({ handleClickAction, toggle }) {
  const privacyDetails = [
    {
      label: 'Last seen and online',
      desc: 'Nobody, Everybody',
      icon: <KeyboardArrowRightOutlined />,
    },
    {
      label: 'Profile photo',
      desc: ' Everybody',
      icon: <KeyboardArrowRightOutlined />,
    },
    {
      label: 'About',
      desc: 'Everybody',
      icon: <KeyboardArrowRightOutlined />,
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
      <StyledPrivacyHeader>
        <div className="navArrow">
          <StyledNavArrow display={toggle}>
            <div className="">
              <StyledArrowBackIcon onClick={() => handleClickAction(false)} />
            </div>
            <p>Privacy</p>
          </StyledNavArrow>
        </div>
      </StyledPrivacyHeader>
      <StyledPrivacyContent toggle={toggle} width="28rem">
        <StyledPrivacyLinksContainer>
          <StyledPrivacyTextContainer>
            <div className="para">
              <p>Who can see your personal info</p>
            </div>
          </StyledPrivacyTextContainer>
          <StyledPrivacyTextContainer>
            {privacyDetails.map((element) => {
              return (
                <>
                  <div className="content-info">
                    <div className="writeup">
                      <p className="label">{element.label}</p>
                      <p className="condition">{element.desc}</p>
                    </div>
                    <div className="clickIcon">
                      <KeyboardArrowRightOutlined
                        sx={{ color: '#708089', cursor: 'pointer' }}
                      />
                    </div>
                  </div>
                  <StyledBorderBottom
                    border="0.8px solid #e9edef"
                    width="85%"
                    margin="0 2rem"
                  />
                </>
              );
            })}
            <StyledReadReceipts>
              <div className="read-receipt-content-info">
                <div className="writeup">
                  <p className="label">Read receipts</p>
                  <p className="condition">
                    if turned off,you won't send or receive Read receipts. Read
                    receipts are always sent for group chats
                  </p>
                </div>
                <div className="clickIconCheckbox">
                  <FormControlLabel
                    control={
                      <StyledCheckBox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{}}
                      />
                    }
                    label=""
                  />
                </div>
              </div>
            </StyledReadReceipts>
            <StyledBorderBottom
              border="5px solid #F0F2F5"
              width="100%"
              margin="0 0"
            />

            <StyledDisappearingMsg>
              <span className="header">Disappearing messages</span>
              <div className="actionCont">
                <div>
                  <p className="actionDesc">Default message timer</p>
                  <p>Off</p>
                </div>
                <KeyboardArrowRightOutlined
                  sx={{ color: '#708089', cursor: 'pointer' }}
                />
              </div>
            </StyledDisappearingMsg>
            <StyledBorderBottom
              border="5px solid #F0F2F5"
              width="100%"
              margin="0 0"
            />
            <StyledGroups>
              <div className="cont1">
                <div className="styled-grp-content">
                  <span>Groups</span>
                  <p>Everyone</p>
                </div>
                <div className="contentIcon">
                  <KeyboardArrowRightOutlined
                    sx={{ color: '#708089', cursor: 'pointer' }}
                  />
                </div>
              </div>
              <StyledBorderBottom
                border="0.8px solid #e9edef"
                width="85%"
                margin="0 2rem"
              />
              <div className="cont2">
                <div className="styled-grp-content">
                  <span>Blocked contacts</span>
                  <p>1</p>
                </div>
                <div className="contentIcon">
                  <KeyboardArrowRightOutlined
                    sx={{ color: '#708089', cursor: 'pointer' }}
                  />
                </div>
              </div>
            </StyledGroups>
            <StyledBorderBottom
              border="5px solid #F0F2F5"
              width="100%"
              margin="0 0"
            />
          </StyledPrivacyTextContainer>
        </StyledPrivacyLinksContainer>
      </StyledPrivacyContent>
    </StyledContainer>
  );
}

export default Privacy;
