import React, { useState } from "react";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoom from "./ChatRoom";
import MessagesTypeInput from "./MessagesTypeInput";

function Chat() {
  const [message, setMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    messagesArray.push(message);
    setMessage("");
  };

  return (
    <div>
      <ChatRoomHeader />
      <ChatRoom chatMessages={messagesArray} handleClick={handleClick} />
      <MessagesTypeInput
        handleClick={handleClick}
        message={message}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Chat;
