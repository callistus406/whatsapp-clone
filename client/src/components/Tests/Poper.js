import React, { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";

import SpeedDialAction from "@mui/material/SpeedDialAction";

import "./poper.css";
import PersonIcon from "@mui/icons-material/Person";
import styled from "styled-components";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
function customStyles() {
  return {
    gradient: {
      background: "red",
    },
  };
}

const StyledSpeedDial = styled(SpeedDial)`
  .MuiFab-root {
    box-shadow: none;
    height: 50px !important;
    width: 50px !important;
    color: white;
  }
`;

const styles = customStyles();

const actions = [
  { icon: <InsertPhotoIcon />, name: "Share", class: "speedDial-contact" },

  { icon: <StickerIcon />, name: "Save", class: "speedDial-sticker" },
  { icon: <CameraAltIcon />, name: "Save", class: "speedDial-camera" },
  { icon: <InsertDriveFileIcon />, name: "Save", class: "speedDial-document " },
  { icon: <PersonIcon />, name: "Copy", class: "speedDial-photo" },
];

export default function OpenIconSpeedDial() {
  const [open, setOpen] = useState(false);
  function clickHandler() {
    setOpen(!open);
  }
  return (
    <Box
      sx={{
        height: 500,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <StyledSpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Attachment />}
        onClick={clickHandler}
        open={open}
        style={{ color: "#F0F0F0" }}
      >
        {/* <div className="pin"></div>  */}
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            className={action.class}
          />
        ))}
      </StyledSpeedDial>
    </Box>
    // <div>
    //   <div class="speed-dial">
    //     <a class="toggle bg-share">
    //       <span class="fa fa-share-alt"></span>
    //     </a>
    //   </div>

    //   <ul class="dials">
    //     <li>
    //       <a class="bg-twitter" href="#">
    //         <span class="fa fa-twitter"></span>
    //       </a>
    //     </li>
    //     <li>
    //       <a class="bg-facebook" href="#">
    //         <span class="fa fa-facebook"></span>
    //       </a>
    //     </li>
    //     <li>
    //       <a class="bg-google-plus" href="#">
    //         <span class="fa fa-google-plus"></span>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}
function Attachment() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" class="">
      <path
        fill="#797E81"
        d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
      ></path>
    </svg>
  );
}
function StickerIcon() {
  return (
    <svg width="53" height="53" viewBox="0 0 53 53" fill="none">
      <g clip-path="url(#clip0_850:74884)">
        <circle cx="26.5" cy="26.5" r="26.5" fill="#0063CB"></circle>
        <path
          d="M53 26.5C53 41.136 41.136 53 26.5 53S0 41.136 0 26.5h53z"
          fill="#0070E6"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.002 22.17v4.32c-.24.321-.624.53-1.056.53H33.14a6.12 6.12 0 0 0-6.12 6.12v1.804c0 .434-.209.818-.532 1.058H22.17a5.17 5.17 0 0 1-5.17-5.17V22.17A5.17 5.17 0 0 1 22.17 17h8.662a5.17 5.17 0 0 1 5.17 5.17zm-5.48 3.33l.937-2.063 2.063-.937-2.063-.938-.937-2.062-.938 2.063-2.062.937 2.062.938.938 2.062zm-7.022-3l1.406 3.094L28 27l-3.094 1.406L23.5 31.5l-1.406-3.094L19 27l3.094-1.406L23.5 22.5z"
          fill="#F7F7F7"
        ></path>
        <path
          d="M34.946 28.52c.352 0 .69-.065 1-.183a3.87 3.87 0 0 1-1.078 2.088l-4.443 4.443a3.87 3.87 0 0 1-2.087 1.079 2.81 2.81 0 0 0 .184-1.003V33.14a4.62 4.62 0 0 1 4.62-4.62h1.804z"
          fill="#F7F7F7"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_850:74884">
          <path fill="#fff" d="M0 0h53v53H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
