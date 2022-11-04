import React, { useRef, useState } from 'react';
import {
  StyledChatContainer,
  StyledUserChatCont,
  StyledUserChatLayout,
  StyledChatLayoutCont,
  StyledUserChatText,
  StyledCircle,
  StyledCaret,
} from './styles.js';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Icons } from './icons';

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
  const toggleCaret = (bool) => {
    console.log(bool);
    setCaret(bool);

    // caretRef.current
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

        <StyledUserChatText>
          <h3>{data.name}</h3>

          <div className="members">
            {' '}
            <p> {data.members} </p>
          </div>
          {/* <Messages /> */}
        </StyledUserChatText>
        <StyledCaret hide={caret}>
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
