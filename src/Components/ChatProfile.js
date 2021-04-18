import { Avatar } from "@material-ui/core";
import React from "react";

function ChatProfile() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h5>Room Name</h5>
        <p>This is last message!</p>
      </div>
    </div>
  );
}

export default ChatProfile;
