import React from "react";
import ChatSearch from "./ChatSearch";
import ChatHeader from "./ChatHeader";
import ChatProfile from "./ChatProfile";

function Sidebar() {
  return (
    <div className="sidebar">
      <ChatHeader />
      <ChatSearch />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
    </div>
  );
}

export default Sidebar;
