import axios from "axios";
export function fetchConversationRequest() {
  return {
    type: "FETCH_CONVERSATIONS_REQUEST",
  };
}
export function fetchConversationSuccess(data) {
  return {
    type: "FETCH_CONVERSATIONS_SUCCESS",
    payload: data,
  };
}
export function fetchConversationFailure(error) {
  return {
    type: "FETCH_CONVERSATIONS_FAILURE",
    payload: error,
  };
}

export const fetchConversations = (data) => {
  return async function (dispatch) {
    dispatch(fetchConversationRequest);
    axios
      .get("http://localhost:3200/api/v1/conversation/629f66f6cd16b099af3c7dda")
      .then((response) => {
        dispatch(fetchConversationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchConversationFailure(error));
      });
  };
};

// export const fetchConversations = (data) => {
//   return async function (dispatch) {
//     dispatch(fetchConversationRequest);
//     try {
//       const response = await axios.get("http://localhost:6000/conversations");
//       if (response) {
//         dispatch(fetchConversationSuccess(response.data));
//         console.log(response.data);
//       }
//     } catch (error) {
//       dispatch(fetchConversationFailure(error.message));
//       console.log(error.message);
//     }
//   };
// };
