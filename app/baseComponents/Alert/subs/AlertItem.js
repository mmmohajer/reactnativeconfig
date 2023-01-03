import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AnimatedView from "BaseComponents/AnimatedView";
import Close from "BaseComponents/Close";

import { getDeviceDimensions } from "Utils/helpers";
import { removeAlertItem } from "Utils/notifications";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const AlertItem = ({ isActive, message, bgColor, notifKey, ...props }) => {
  const dispatch = useDispatch();

  const [initialX, setInitialX] = useState(450);
  const [finalX, setFinalX] = useState(0);

  useEffect(() => {
    if (isActive) {
      setInitialX(getDeviceDimensions()?.screen?.width || 700);
      setFinalX(0);
    } else {
      setInitialX(0);
      setFinalX(getDeviceDimensions()?.screen?.width || 700);
    }
  }, [isActive]);
  return (
    <>
      <AnimatedView
        zIndex={2}
        initialTranslateX={initialX}
        finalTranslateX={finalX}
        durationTime={200}
        startAnimation={true}
        viewProps={{ key: notifKey }}
        {...props}
      >
        <AppText
          padding={2}
          bgColor={bgColor}
          brRad={5}
          brThickness={1}
          textProps={{ color: "white", isBold: true }}
        >
          {message}
        </AppText>
        <Close onPress={() => removeAlertItem(dispatch, notifKey)} />
      </AnimatedView>
    </>
  );
};

export default AlertItem;
