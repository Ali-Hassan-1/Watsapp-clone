import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, Search } from "@material-ui/icons";
import React from "react";

function ChatRoomHeader() {
  return (
    <div className="chatRoomHeader">
      <div className="chatRoomHeader__body">
        <div className="chatRoomHeader__avatar">
          <Avatar />
        </div>
        <div className="chatRoomHeader__userName">
          <h5>Room Name</h5>
          <p>last seen Fri, 04 Sep 2020</p>
        </div>

        <div className="chatRoomHeader__icons">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ChatRoomHeader;
