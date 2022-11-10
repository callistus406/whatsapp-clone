import React, { useRef, useState } from 'react';
import {
  StyledChatContainer,
  StyledUserChatCont,
  StyledUserChatLayout,
  StyledChatLayoutCont,
  StyledUserChatText,
  StyledCircle,
  StyledCaret,
  StyledContextMenu4MsgSpace,
  StyledContextMenu,
  StyledContextMenuItem4MsgSpace,
  StyledContextMenuItem,
  StyledBox,
  Avater,
} from './styles.js';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Icons } from './icons';
import { messageDialog, groupDialog } from '../../GlobalVariables/variables.js';
const dummyData = [
  {
    name: 'Hackers league',
    members: ' Daniel, Obinna, Jamina',
  },
  {
    name: 'Dev team',
    members: ' Boss, Olivia, Grant',
  },
  {
    name: 'Freelancers',
    members: ' Dave,Abel, carlos',
  },
];

function ChatLayout({ data, index }) {
  const [caret, setCaret] = useState(true);
  const [contextMenu, setContextMenu] = React.useState(null);

  const toggleCaret = (bool) => {
    console.log(bool);
    setCaret(bool);

    // caretRef.current
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    toggleCaret(true);
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };
  const handleClose = () => {
    setContextMenu(null);
  };
  return (
    <StyledChatLayoutCont
      key={index}
      onMouseEnter={() => toggleCaret(false)}
      onMouseLeave={() => toggleCaret(true)}
    >
      <StyledUserChatCont>
        <div className="chatHead">
          <StyledCircle>
            <PeopleAltIcon style={{ color: '#fff' }} />
          </StyledCircle>
        </div>
        <StyledContextMenu
          PaperProps={{
            style: {
              // maxHeight: ITEM_HEIGHT * 4.5,
              height: '13rem',
              minWidth: '14rem',
            },
          }}
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          autoFocus={false}
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          {groupDialog.map((item) => {
            return (
              <StyledContextMenuItem onClick={handleClose}>
                {item.text}
              </StyledContextMenuItem>
            );
          })}
        </StyledContextMenu>
        <StyledUserChatText>
          <h3>{data.name}</h3>

          <div className="members">
            {' '}
            <p> {data.members} </p>
          </div>
          {/* <Messages /> */}
        </StyledUserChatText>
        <StyledCaret hide={caret} onClick={handleContextMenu}>
          <KeyboardArrowDownIcon />
        </StyledCaret>
      </StyledUserChatCont>
    </StyledChatLayoutCont>
  );
}
function Index() {
  const caretRef = useRef();

  return (
    <StyledChatContainer>
      <div className="title">
        <>4 groups in common</>
      </div>
      {dummyData.map((data, index) => {
        return <ChatLayout data={data} index={index} />;
      })}
    </StyledChatContainer>
  );
}

export default Index;
