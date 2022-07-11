import React from "react";
import "../Home.css";
import { connect } from "react-redux";
import { showGroupInfo } from "../../../Redux-State/action creators/pageActions";
function MessageBoxHead(props) {
  return (
    <div className="chatHeadInfo" onClick={() => props.showGroupInfo(true)}>
      <div className="title">
        <p>Nigeria News</p>
        <div>
          {" "}
          <span> friend 1</span> <span> friend 2</span> <span> friend 3</span>
          <span> friend 4</span>
          <span> friend 5</span> <span> friend 1</span>{" "}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    // search msg state
    displayGroupInfoLayout: state.groupInfo.displayGroupInfoLayout,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // search msg action
    showGroupInfo: (bool) => dispatch(showGroupInfo(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBoxHead);
