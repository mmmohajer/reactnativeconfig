import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppTouchable from "BaseComponents/AppTouchable";
import Icon from "BaseComponents/Icon";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Close = ({ onPress }) => {
  return (
    <>
      <AppTouchable
        type="highlight-no-effect"
        touchableProps={{ onPress }}
        style={{ position: "absolute", top: 5, right: 5 }}
        widthInSize={40}
        heightInSize={30}
        isCentralizedInX1Dir
        isCentralizedInX2Dir
        brThickness={2}
        brRad={5}
      >
        <AppView>
          <Icon name="email" />
        </AppView>
      </AppTouchable>
    </>
  );
};

export default Close;
