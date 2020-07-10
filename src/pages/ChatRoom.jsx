import React from "react";
import { auth, realdb } from "../services/firebase";
import { MessageList } from "@livechat/ui-kit";
import ChatTopBar from "../components/ChatTopBar";
import InputForm from "../components/InputForm";
import ChatMessage from "../components/ChatMessage";

const messagelisst = {
  position: "fixed",
  top: "123.78px",
  bottom: "6px",
  height: "auto",
  left: 0,
  right: 0,
  overflow: "auto",
  backgroundColor: "#6AB04A",
};

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.handleCurrentRoom);
    this.state = {
      chats: [],
      content: "",
      user: auth.currentUser,
      loading: false,
      rooms: [],
      current_room: this.props.current_room,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange = (event) => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  handleOnSubmit = async (event) => {
    //writing to the database every time submitted
    console.log("suber");
    event.preventDefault();
    try {
      await realdb.ref(`chatrooms/${this.state.current_room}/chats`).push({
        content: this.state.content,
        timestamp: Date.now(),
        displayName: this.state.user.displayName
          ? this.state.user.displayName
          : this.state.user.email,
        uid: this.state.user.uid,
      });
      console.log("changin content");
      this.setState({ content: "" });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    //read from the database on component mount and on listener
    try {
      realdb
        .ref(`chatrooms/${this.state.current_room}/chats`)
        .on("value", (snapshot) => {
          var chats = [];
          snapshot.forEach((snap) => {
            chats.push(snap.val());
          });

          this.setState({ chats });
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="container">
        <ChatTopBar
          room_name={this.state.current_room}
          handleCurrentRoom={this.props.handleCurrentRoom}
        />

        <div className="container p-0" style={messagelisst}>
          {!this.state.loading && (
            <MessageList>
              {this.state.chats.map((chat) => {
                return (
                  <ChatMessage
                    key={chat.timestamp}
                    user={this.state.user}
                    chat={chat}
                  />
                );
              })}
            </MessageList>
          )}
        </div>

        <InputForm
          placeholder="Write your message here...  📝"
          icon="fas fa-paper-plane"
          color="#6AB04A"
          content={this.state.content}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export default ChatRoom;
