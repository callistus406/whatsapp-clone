import { connect } from "react-redux";
import {
  toggleMsgSearch,
  showProfile,
  showStatus,
  newChatToggle,
} from "../../Redux-State/action creators/pageActions";
import "./Home.css";

export const StatusIcon = connect(
  (state) => ({
    displayStatusContainer: state.status.displayStatusContainer,
  }),
  (dispatch) => ({
    showStatus: (bool) => dispatch(showStatus(bool)),
  })
)((props) => {
  return (
    <svg
      id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      onClick={() => props.showStatus(true)}
    >
      <path
        fill="#51585C"
        d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
      ></path>
      <path fill="#51585C" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
    </svg>
  );
});

export const MessageIcon = connect(
  (state) => ({
    displayChatContainer: state.newChat.displayChatContainer,
  }),
  (dispatch) => ({
    newChatToggle: () => dispatch(newChatToggle()),
  })
)((props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      onClick={props.newChatToggle}
    >
      <path
        fill="#51585C"
        d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
      ></path>
    </svg>
  );
});

export function OptionsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className="">
      <path
        fill="#51585C"
        d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
      ></path>
    </svg>
  );
}
export const SearchIcon = connect(
  (state) => ({
    displayMsgSearchLayout: state.searchMsg.displayMsgSearchLayout,
  }),
  (dispatch) => ({
    toggleMsgSearch: () => dispatch(toggleMsgSearch()),
  })
)((props) => {
  // console.log(props);
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className=""
      onClick={props.toggleMsgSearch}
    >
      <path
        fill="#51585C"
        d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
      ></path>
    </svg>
  );
});

export const ProfileIcon = connect(
  (state) => ({
    displayProfileContainer: state.searchMsg.displayProfileContainer,
  }),
  (dispatch) => ({
    showProfile: (bool) => dispatch(showProfile(bool)),
  })
)((props) => {
  return (
    <div className="profileIcon" onClick={() => props.showProfile(true)}>
      <img
        className="avatarImage"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU"
        alt=""
        // srcset=""
      />
    </div>
  );
});

export function MsgOptionsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className="">
      <path
        fill="#51585C"
        d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
      ></path>
    </svg>
  );
}
export function EmojiIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="ekdr8vow dhq51u3o"
    >
      <path
        fill="#797E81"
        d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
      ></path>
    </svg>
  );
}
export function RecorderIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className="">
      <path
        fill="#797E81"
        d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"
      ></path>
    </svg>
  );
}

export function Attachment() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className="">
      <path
        fill="#797E81"
        d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
      ></path>
    </svg>
  );
}
export function StickerIcon() {
  return (
    <svg width="53" height="53" viewBox="0 0 53 53" fill="none">
      <g clipPath="url(#clip0_850:74884)">
        <circle cx="26.5" cy="26.5" r="26.5" fill="#0063CB"></circle>
        <path
          d="M53 26.5C53 41.136 41.136 53 26.5 53S0 41.136 0 26.5h53z"
          fill="#0070E6"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
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

export function ArrowBack(props) {
  return (
    <div>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          fill="currentColor"
          d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
        ></path>
      </svg>
    </div>
  );
}

//
export function Tick(props) {
  return (
    <svg viewBox="0 0 16 15" width="15" height="14">
      <path
        fill="#718388"
        d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      ></path>
    </svg>
  );
}

//
