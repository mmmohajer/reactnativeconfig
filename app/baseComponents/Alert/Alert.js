import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import AlertContainer from "./subs/AlertContainer";
import AlertItem from "./subs/AlertItem";
import { localStyles } from "./localStyles";

const Alert = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  const determineNotifColor = (notifType) => {
    if (notifType === "success") {
      return "success";
    } else if (notifType === "error") {
      return "error";
    } else if (notifType === "warning") {
      return "warning";
    }
  };

  return (
    <>
      <AlertContainer>
        {notifications?.map((notif, idx) => (
          <AlertItem
            key={notif.key}
            notifKey={notif.key}
            message={notif.message}
            isActive={notif.isActive}
            bgColor={determineNotifColor(notif?.type)}
          />
        ))}
      </AlertContainer>
    </>
  );
};

export default Alert;
