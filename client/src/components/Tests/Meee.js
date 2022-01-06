import React from "react";
import styled from "styled-components";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  MenuProvider,
  useContextMenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

export default function Meee(props) {
  let MENU_ID = props.mee;

  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function handleContextMenu(event) {
    event.preventDefault();
    show(event, {
      props: {
        key: "value",
      },
    });
  }
  const groupDialog = [
    "Archive chat",
    "Mute notification",
    "Exit group",
    "Pin chat",
    "Mark as read",
  ];
  const handleItemClick = ({ event, props }) => console.log(event, props);

  const StyledItem = styled(Item)`
    .react-contexify__item__content {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    &:hover {
      .react-contexify__item__content {
        background-color: #000;
      }
    }
  `;
  return (
    <div>
      <p onContextMenu={handleContextMenu}>
        lorem ipsum blabladhasi blaghs blah
      </p>
      <Menu id={MENU_ID}>
        {groupDialog.map((item) => {
          return (
            <StyledItem
              // style={{  }}
              onClick={handleItemClick}
            >
              {item}
            </StyledItem>
          );
        })}
      </Menu>
    </div>
  );
}
