import React, { useRef, useCallback, useEffect, useState } from 'react';
import '../Home.css';
import { connect } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';
import { CenterDivContent } from '../../Styles/CustomStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterListIcon from '@mui/icons-material/FilterList';
// menu

import {
  displaySettings,
  logout,
} from '../../../Redux-State/actionCreators/pageActions';
import {
  StatusIcon,
  MessageIcon,
  ProfileIcon,
  ArrowBack,
  CommunityIcon,
} from '../HomeIcons';
import {
  StyledSpan,
  StyledIcon,
  StyledSearchIcon,
  StyledNotificationIcon,
  StyledActionIcons,
  StyledSearchBarContainer,
} from '../style';
import CustomMenu from './CustomMenu';
function Content(props) {
  const StyledFilterMsg = styled.div`
    display: ${(prop) => (prop.toggle ? 'flex' : 'none')};
    padding-left: 2.3rem;
    transition: 0.6s;
    height: 70px;
    width: 100%;
    align-items: center;
    color: #31826e;
    font-weight: 500;
    ${'' /* } */}
  `;

  const StyledBorderBottom = styled.div`
    display: ${(prop) => (prop.toggle ? 'block' : 'none')};
    border: 1px solid #e9edef;
    margin-left: auto;
    width: 81%;
  `;

  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
    // console.log(msgCont);
    console.log(
      'home content -0-0 rendered...............' +
        countRef.current +
        '---times'
    );
  });
  const [searchInput, setSearchInput] = useState('.');
  const inputRef = useRef();
  const [toggleState, setToggleState] = useState({
    filterIcon: false,
    inputFocused: false,
    toggleBg: false,
  });

  const divRef = useRef();

  const [cancel, setCancel] = useState(false);

  const unfocus = () => {
    setToggleState({ ...toggleState, inputFocused: false });
  };
  const focus = () => {
    setToggleState({ ...toggleState, inputFocused: true });
  };
  const handleChange = (event) => {
    setSearchInput(event.target.value);

    if (searchInput.length) {
      setCancel(true);
    }
  };

  const handleToggleBg = (bool) => {
    setToggleState({ ...toggleState, toggleBg: bool });
  };
  function handleCancel() {
    inputRef.current.value = '';
    setCancel(false);
  }

  return (
    <>
      <div className="topHeader">
        <div className="profileDisplay">
          <ProfileIcon />
          <div className="profileActions">
            <StyledActionIcons style={{ color: '#54656F' }}>
              <CommunityIcon />
            </StyledActionIcons>
            <StyledActionIcons>
              <StatusIcon />
            </StyledActionIcons>
            <StyledActionIcons>
              <MessageIcon />
            </StyledActionIcons>

            <CustomMenu />
            <div>{/* {"this contains popover menu "} */}</div>
          </div>
        </div>
        <div className="notificationMsgCont">
          <div className="notificationContent">
            <div className="iconCont">
              <div className="icon">
                <StyledNotificationIcon />{' '}
              </div>
            </div>
            <div className="notificationsText">
              {/* <div className="notificationMsg" </div> */}
              <div style={{ position: 'relative' }} className="notificationMsg">
                <p>Get notification of new messages </p>
                <span>Turn on desktop notifications</span>
                <StyledSpan>
                  <ArrowForwardIosIcon style={StyledIcon.smallIcon} />
                </StyledSpan>
              </div>
            </div>
          </div>
        </div>
        <CenterDivContent height="3.2rem">
          <StyledSearchBarContainer ref={divRef}>
            <span className="searchIconCont">
              {' '}
              {toggleState.inputFocused ? <ArrowBack /> : <StyledSearchIcon />}
            </span>
            <span className="clearIconCont">
              {cancel ? <ClearIcon onClick={handleCancel} /> : ''}
            </span>
            <input
              ref={inputRef}
              type="text"
              placeholder={
                !toggleState.inputFocused
                  ? 'Search or start new chat'
                  : toggleState.filterIcon
                  ? 'Search unread chats'
                  : ''
              }
              className="inputSearch"
              onFocus={focus}
              onBlur={unfocus}
              onChange={handleChange}
              // onClick={handleClick("search")}
            />
            <div
              className="filterIconCont"
              style={{
                background: toggleState.filterIcon ? '#00a884' : '#fff',
              }}
              onClick={() =>
                setToggleState({
                  ...toggleState,
                  filterIcon: !toggleState.filterIcon,
                  inputFocused: !toggleState.inputFocused,
                })
              }
            >
              <FilterListIcon
                sx={{ color: !toggleState.filterIcon ? '#8696A0' : '#fff' }}
              />
            </div>
          </StyledSearchBarContainer>
        </CenterDivContent>
      </div>
      <StyledFilterMsg toggle={toggleState.filterIcon}>
        <p>FILTERED BY UNREAD</p>
      </StyledFilterMsg>
      <StyledBorderBottom toggle={toggleState.filterIcon} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    logout: state.options.logout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    displaySettings: (bool) => dispatch(displaySettings(bool)),
    logout: () => dispatch(logout()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Content));
