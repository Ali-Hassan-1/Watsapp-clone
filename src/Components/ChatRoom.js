import React, { useState } from "react";

function ChatRoom({ chatMessages }) {
  return (
    <div className="chatRoom">
      <div className="chatRoom__body">
        <p>
          {chatMessages.map((m) => (
            <p className="chatRoom__message">
              <span className="chatRoom__name">Ali</span>
              {m}
              <span className="chatRoom__timestamp">
                {new Date().toUTCString()}
              </span>
            </p>
          ))}
        </p>
        <p className="chatRoom__message chatRoom__receiver">
          <span className="chatRoom__name">Ali</span>
          This is message!
          <span className="chatRoom__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ChatRoom;
