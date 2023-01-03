import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const AlertContainer = ({ children }) => {
  return (
    <>
      <AppView
        isFullWidth
        style={{
          position: "absolute",
        }}
      >
        {children}
      </AppView>
    </>
  );
};

export default AlertContainer;
