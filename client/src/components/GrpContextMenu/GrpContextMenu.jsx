import { styled as muiStyled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { groupContext } from '../../GlobalVariables/variables';
import { useState } from 'react';

function GrpContextMenu() {
  const [contextMenu, setContextMenu] = useState(null);

  const handleClose = () => {
    setContextMenu(null);
  };
  const StyledContextMenu = muiStyled(Menu)(({ theme }) => ({
    fontSize: '0.8rem',
  }));
  const StyledContextMenu4MsgSpace = muiStyled(Menu)(({ theme }) => ({
    fontSize: '1rem',
  }));
  const StyledContextMenuItem4MsgSpace = muiStyled(MenuItem)(({ theme }) => ({
    fontSize: '0.9rem',
    color: '#48565F',
    height: '2.5rem',
  }));
  return (
    <>
      <StyledContextMenu4MsgSpace
        PaperProps={{
          style: {
            // maxHeight: "5rem",
            height: 'auto',
            minWidth: '13rem',
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
        {groupContext.map((item) => {
          return (
            <StyledContextMenuItem4MsgSpace onClick={handleClose}>
              {item.text}
            </StyledContextMenuItem4MsgSpace>
          );
        })}
      </StyledContextMenu4MsgSpace>
    </>
  );
}

export default GrpContextMenu;
