import React from "react";
import { MessageText, Message } from "@livechat/ui-kit";

function borderRadius(user, chat) {
  if (user.uid === chat.uid) {
    return "100px 100px 10px 100px";
  } else {
    return "100px 100px 100px 10px";
  }
}

function backgroundColor(user, chat) {
  if (user.uid === chat.uid) {
    return "#6AB04ACC";
  } else {
    return "#6AB04A66";
  }
}
const ChatMessage = ({ user, chat }) => {
  return (
    <Message authorName={chat.displayName} isOwn={user.uid === chat.uid}>
      <MessageText
        style={{
          borderRadius: borderRadius(user, chat),
          backgroundColor: backgroundColor(user, chat),
        }}
      >
        {chat.content}
      </MessageText>
    </Message>
  );
};

export default ChatMessage;
