import React from "react";
import { DonutLarge } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function ChatHeader() {
  return (
    <div>
      <div className="chatHeader__body">
        <div className="chatHeader__leftAvatar">
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
        <div className="chatHeader__rightIcon">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
