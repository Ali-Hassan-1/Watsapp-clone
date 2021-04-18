import { IconButton } from "@material-ui/core";
import { EmojiEmotions, Mic } from "@material-ui/icons";
import React from "react";

function MessagesTypeInput({ message, handleChange, handleClick }) {
  return (
    <div className="MessagesTypeInput">
      <div className="MessageTypeInput__EmojiEmotions">
        <IconButton>
          <EmojiEmotions />
        </IconButton>
      </div>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type Your Message..."
      />

      {
        <div>
          {message ? (
            <div className={message ? "" : "disabledBtn"}>
              <IconButton onClick={handleClick}>
                <span>
                  <i className="fa fa-send" />
                </span>
              </IconButton>
            </div>
          ) : (
            <div className="MessageTypeInput__micbtn">
              <IconButton>
                <Mic />
              </IconButton>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default MessagesTypeInput;
