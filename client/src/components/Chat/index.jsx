import React, { useRef, useState } from 'react';
import {
  StyledChatContainer,
  StyledUserChatCont,
  StyledUserChatLayout,
  StyledChatLayoutCont,
  StyledUserChatText,
  StyledCircle,
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

function Index() {
  const caretRef = useRef();
  const [caret, setCaret] = useState(false);
  const toggleCaret = (bool) => {
    console.log(bool);
    setCaret(bool);

    // caretRef.current
  };
  return (
    <StyledChatContainer>
      <div className="title">
        <h5>4 groups in common</h5>
      </div>
      {dummyData.map((data, index) => {
        return (
          <StyledChatLayoutCont key={index}>
            <StyledUserChatCont
              onMouseEnter={() => toggleCaret(true)}
              onMouseLeave={() => toggleCaret(false)}
            >
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
              <div ref={caretRef} className={caret ? 'hide' : 'caret'}>
                <KeyboardArrowDownIcon />
              </div>
            </StyledUserChatCont>
          </StyledChatLayoutCont>
        );
      })}
    </StyledChatContainer>
  );
}

export default Index;
