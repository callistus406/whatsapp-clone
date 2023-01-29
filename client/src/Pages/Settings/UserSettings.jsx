import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { connect } from 'react-redux';
import NotificationComponent from '../Notification/NotificationComponent';
import { Help as HelpComponent } from '../Help/Help';
import BlockedContacts from '../BlockedContacts/BlockedContacts';
import SelectTheme from '../SelectTheme/SelectTheme';
import LockIcon from '@mui/icons-material/Lock';
import Privacy from '../Privacy/Privacy';
// import {optionTex}
import {
  displaySettings,
  togglePrivacy,
} from '../../Redux-State/actionCreators/pageActions';
import {
  toggleNotification,
  toggleTheme,
  toggleWallpaper,
  toggleBlockedContacts,
  toggleKeyboardShortcuts,
  toggleHelp,
  showProfile,
  toggleSecurity,
} from '../../Redux-State/actionCreators/pageActions';
import {
  StyledContainer,
  StyledArrowBackIcon,
  StyledNavArrow,
  StyledSettingsOption,
  StyledSettingsContent,
  StyledSettings,
} from './styles';
import {
  Notification,
  Theme,
  ChatWallpaper,
  Blocked,
  KeyboardShortcuts,
  Help,
  Avatar,
  SecurityIcon,
  PrivacyIcon,
} from './icons';
import Security from '../Security/Security';
import KeyboardCommands from '../KeyboardCommands/KeyboardCommands';

const optionText = [
  { id: 1, name: 'Notification' },
  { id: 2, name: 'Privacy' },
  { id: 3, name: 'Security' },
  { id: 4, name: 'Theme' },
  { id: 5, name: 'Chat Wallpaper' },
  { id: 6, name: 'Blocked' },
  { id: 7, name: 'Keyboard shortcuts' },
  { id: 8, name: 'Help' },
];
// const arr = [<Notification />];
const options = [
  <Notification />,
  <LockIcon style={{ color: '#919191' }} />,
  <SecurityIcon />,
  <Theme />,
  <ChatWallpaper />,
  <Blocked />,
  <KeyboardShortcuts />,
  <Help />,
];

function UserSettings(props) {
  const actions = [
    props.toggleNotification,
    () => {
      props.togglePrivacy(true);
      props.displaySettings(false);
    },
    () => {
      props.toggleSecurity(true);
      props.displaySettings(false);
    },

    props.toggleTheme,
    props.toggleWallpaper,
    props.toggleBlockedContacts,
    () => {
      props.toggleKeyboardShortcuts(true);
      props.displaySettings(false);
    },
    props.toggleHelp,
  ];
  const { username, about } = props.userInfo.data.payload.user;
  // console.log(props);
  const [open, setOpen] = React.useState(false);
  // console.log(open);
  const handleClickOpen = () => {
    // console.log("ewewe");
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function returnNothing() {
    return;
  }
  function SettingsOptions(props) {
    return (
      <StyledSettingsOption onClick={props.clickAction}>
        <div className="icon">{props.icon}</div>
        <div className="textCont">
          <p>{props.text}</p>
        </div>
      </StyledSettingsOption>
    );
  }
  return (
    <StyledSettings>
      <StyledContainer toggle={props.displaySettingsLayout} width="28rem">
        <div className="settingsHeader">
          <div className="navArrow">
            <StyledNavArrow display={props.displaySettingsLayout}>
              <div className="">
                <StyledArrowBackIcon
                  onClick={() => props.displaySettings(false)}
                />
              </div>
              <p>Settings</p>
            </StyledNavArrow>
          </div>
        </div>
        <StyledSettingsContent>
          <div className="settingsProfileCont">
            <div className="settingsProfilePicCont">
              <div className="settingsProfilePic">
                <Avatar />
              </div>
            </div>
            <div
              className="settingsProfileContent"
              onClick={() => {
                props.showProfile(true);

                props.displaySettings(false);
              }}
            >
              <p>{username}</p>
              <span>{about ? about : 'Loading about...'}</span>
            </div>
          </div>
          {options.map(function (item, index) {
            return (
              <SettingsOptions
                icon={item}
                text={optionText[index].name}
                key={optionText[index].id}
                clickAction={actions[index]}
              />
            );
          })}
        </StyledSettingsContent>
      </StyledContainer>
      <NotificationComponent />
      <Security
        toggle={props.displaySecurityPage}
        handleClickAction={props.toggleSecurity}
      />
      <Privacy
        toggle={props.displayPrivacyPage}
        handleClickAction={props.togglePrivacy}
      />
      <BlockedContacts
        toggle={props.displayBlockedContacts}
        handleClickAction={props.toggleBlockedContacts}
      />
      <HelpComponent
        toggle={props.displayHelp}
        handleClickAction={props.toggleHelp}
      />
      <SelectTheme
        toggle={props.displayTheme}
        handleClickAction={props.toggleTheme}
      />
      {/* <KeyboardCommands
        toggle={props.displayKeyboardShortcuts}
        handleClickAction={props.toggleKeyboardShortcuts}
      /> */}
    </StyledSettings>
  );
}
function mapStateToProps(state) {
  return {
    displayNotification: state.notification.displayNotification,
    displayTheme: state.theme.displayTheme,
    displayWallpaper: state.wallpaper.displayWallpaper,
    displayBlockedContacts: state.blockedContacts.displayBlockedContacts,
    displayKeyboardShortcuts: state.keyboardShortCuts.displayKeyboardShortcuts,
    displayHelp: state.help.displayHelp,

    displayProfileContainer: state.searchMsg.displayProfileContainer,
    displayPrivacyPage: state.privacy.displayPrivacyPage,
    displaySecurityPage: state.security.displaySecurityPage,
    // search msg state
    displaySettingsLayout: state.settings.displaySettings,
    userInfo: state.login,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleNotification: () => dispatch(toggleNotification()),
    toggleTheme: () => dispatch(toggleTheme()),
    toggleWallpaper: () => dispatch(toggleWallpaper()),
    toggleBlockedContacts: () => dispatch(toggleBlockedContacts()),
    toggleKeyboardShortcuts: (bool) => dispatch(toggleKeyboardShortcuts(bool)),
    toggleHelp: () => dispatch(toggleHelp()),

    showProfile: (bool) => dispatch(showProfile(bool)),
    toggleSecurity: (bool) => dispatch(toggleSecurity(bool)),
    togglePrivacy: (bool) => dispatch(togglePrivacy(bool)),

    // search msg action
    displaySettings: (bool) => dispatch(displaySettings(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
