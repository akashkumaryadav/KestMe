import React, { Component } from "react";

import {
  ChatList,
  ChatListItem,
  Avatar,
  Column,
  Row,
  Title,
  Subtitle,
} from "@livechat/ui-kit";
import InputForm from "../components/InputForm";
import { realdb } from "../services/firebase";
import ChatRoom from "./ChatRoom";
import { signout } from "../helpers/auth";

class ChatRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      rooms: [],
      current_room: "",
    };
  }

  chooseRoom(current_room) {
    this.setState({ current_room });
  }

  handleOnChange = (event) => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  handleOnSubmit = async (event) => {
    //writing to the database every time submitted

    event.preventDefault();
    if (this.state.content.length === 0) {
      return;
    }
    try {
      await realdb.ref(`chatrooms/${this.state.content}/`).set({
        name: this.state.content,
        timestamp: Date.now(),
        description: `A magnificent place for ${this.state.content}`,
      });

      this.setState({ content: "" });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    realdb.ref("chatrooms").on("value", (snapshot) => {
      let rooms = [];
      snapshot.forEach((snap) => {
        rooms.push(snap.val());
      });
      this.setState({ rooms });
    });
  }
  render() {
    return (
      <div className="container">
        {this.state.current_room.length === 0 && (
          <>
            <div
              style={{
                textAlign: "center",
                paddingTop: "1rem",
                fontSize: "32.4px",
                height: "128px",
              }}
            >
              <p>ChatRooms</p>
              <div
                style={{
                  float: "left",
                  padding: "0 1rem 0rem 1rem",
                  fontSize: "1.2rem",
                }}
                onClick={() => signout()}
              >
                <i
                  className="fas fa-sign-out-alt"
                  style={{ transform: "rotate(180deg)" }}
                ></i>
                <small> signout</small>
              </div>
            </div>
            <ChatList
              style={{
                position: "fixed",
                bottom: "60px",
                left: "0",
                right: "0",
                top: "128.9px",
              }}
              className="container"
            >
              {this.state.rooms.map((room) => {
                return (
                  <div
                    key={room.timestamp}
                    onClick={() => this.setState({ current_room: room.name })}
                  >
                    <ChatListItem>
                      <Avatar letter={room.name.slice(0, 1)} />
                      <Column fill>
                        <Row justify>
                          <Title ellipsis>{room.name}</Title>
                        </Row>
                        <Subtitle ellipsis>{room.description}</Subtitle>

                        <Subtitle>
                          <em>created in:</em>
                          <strong>{Date(room.timestamp).split(" ")[1]}</strong>
                        </Subtitle>
                      </Column>
                    </ChatListItem>
                  </div>
                );
              })}
            </ChatList>
            <div>
              <InputForm
                content={this.state.content}
                handleOnChange={this.handleOnChange}
                handleOnSubmit={this.handleOnSubmit}
                placeholder="type room name to create... 😘"
                icon="fas fa-plus"
                color="whitesmoke"
              />
            </div>
          </>
        )}
        {this.state.current_room.length > 0 && (
          <ChatRoom
            current_room={this.state.current_room}
            handleCurrentRoom={() => this.setState({ current_room: "" })}
          />
        )}
      </div>
    );
  }
}

export default ChatRooms;
