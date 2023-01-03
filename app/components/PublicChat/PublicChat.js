import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import TextBox from "BaseComponents/TextBox";
import Button from "BaseComponents/Button";

import { WEBSOCKET_CHAT_API_ROUTE } from "Constants/apiRoutes";
import { websocketApiRoute } from "Utils/helpers";
import { getStoreData } from "Utils/auth";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const PublicChat = () => {
  const [accessToken, setAccessToken] = useState("");
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [chatSocket, setChatSocket] = useState();

  const getAccessToken = async () => {
    const localAccessToken = await getStoreData("access_token");
    if (localAccessToken) {
      setAccessToken(localAccessToken);
    } else {
      console.log("No authentication");
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      console.log(
        `${websocketApiRoute(WEBSOCKET_CHAT_API_ROUTE)}?token=${accessToken}`
      );
      setChatSocket(
        new WebSocket(
          `${websocketApiRoute(WEBSOCKET_CHAT_API_ROUTE)}?token=${accessToken}`
        )
      );
    }
  }, [accessToken]);

  useEffect(() => {
    if (chatSocket) {
      chatSocket.onmessage = (message) => {
        try {
          const data = JSON.parse(message.data);
          console.log("Got chat websocket message", data);
        } catch (e) {
          console.log(e);
        }
      };

      chatSocket.addEventListener("open", (e) => {
        console.log("Public ChatSocket OPEN");
      });

      chatSocket.onclose = (e) => {
        console.error("Public ChatSocket closed.");
      };

      chatSocket.onOpen = (e) => {
        console.log("Public ChatSocket onOpen", e);
      };

      chatSocket.onerror = (e) => {
        console.log("Public ChatSocket error", e);
      };

      if (chatSocket.readyState == WebSocket.OPEN) {
        console.log("Public ChatSocket OPEN");
      } else if (chatSocket.readyState == WebSocket.CONNECTING) {
        console.log("Public ChatSocket connecting..");
      }
    }
  }, [chatSocket]);

  const submitHandler = () => {
    try {
      chatSocket.send(
        JSON.stringify({
          command: "send",
          message,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const joinRoomHandler = () => {
    chatSocket.send(
      JSON.stringify({
        command: "join",
        room_id: 1,
      })
    );
  };

  const leaveRoomHandler = () => {
    chatSocket.send(
      JSON.stringify({
        command: "leave",
        room,
      })
    );
  };

  const getRoomMessagesHandler = () => {
    chatSocket.send(
      JSON.stringify({
        command: "get_room_chat_messages",
        page_number: 1,
      })
    );
  };
  return (
    <>
      <TextBox
        textProps={{ color: "black", isBold: false }}
        isMultiLine
        placeholder="Type something"
        val={message}
        setVal={setMessage}
      />
      <Button onPress={submitHandler} btnText="Submit" />
      <TextBox
        textProps={{ color: "black", isBold: false }}
        isMultiLine
        placeholder="Room"
        val={room}
        setVal={setRoom}
      />
      <Button onPress={joinRoomHandler} btnText="Join Room" />
      <Button onPress={leaveRoomHandler} btnText="Leave Room" />
      <Button
        onPress={getRoomMessagesHandler}
        btnText="Get Room Chat Messages"
      />
    </>
  );
};

export default PublicChat;
