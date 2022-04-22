import React, { useState } from "react";
import Picker from "emoji-picker-react";

const Emoji = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div style={{ width: "500px" }}>
      {chosenEmoji ? (
        <span>You : {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default Emoji;
