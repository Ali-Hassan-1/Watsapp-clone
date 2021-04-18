import React from "react";
import { Search } from "@material-ui/icons";

function ChatSearch() {
  return (
    <div className="ChatSearch__input">
      <Search />
      <input placeholder="Search..." type="text" />
    </div>
  );
}

export default ChatSearch;
