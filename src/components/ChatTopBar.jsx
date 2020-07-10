import React from "react";
import {
  TitleBar,
  IconButton,
  CloseIcon,
  AgentBar,
  Avatar,
  Column,
  Title,
  Subtitle,
} from "@livechat/ui-kit";
import { auth } from "../services/firebase";

const ChatTopBar = ({ room_name, handleCurrentRoom }) => {
  return (
    <>
      <div
        className="container"
        style={{
          position: "fixed",

          left: "0",
          minHeight: "123.78px",
          right: "0",
          backgroundColor: "#6AB04A",
        }}
      >
        <TitleBar
          style={{ fontSize: "1.2rem", color: "black" }}
          title={room_name}
          rightIcons={[
            <IconButton key="close">
              <div onClick={handleCurrentRoom}>
                <CloseIcon />
              </div>
            </IconButton>,
          ]}
        />
        <AgentBar>
          <Avatar
            letter={
              auth.currentUser.displayName
                ? auth.currentUser.displayName[0]
                : "A"
            }
            imgUrl={auth.currentUser.photoURL}
          />
          <Column>
            <Title>
              {auth.currentUser.displayName
                ? auth.currentUser.displayName
                : auth.currentUser.email}
            </Title>

            <Subtitle>
              <small>
                bio wait for some updates to update this{" "}
                <span role="img" aria-label="celebemote">
                  🎉
                </span>
              </small>
            </Subtitle>
          </Column>
        </AgentBar>
      </div>
    </>
  );
};

export default ChatTopBar;
