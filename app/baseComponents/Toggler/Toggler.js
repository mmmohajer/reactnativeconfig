import { View, Text } from "react-native";
import { useRef, useEffect, useState } from "react";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AnimatedView from "BaseComponents/AnimatedView";
import AppTouchable from "BaseComponents/AppTouchable";

import { styles, fontStyleFunc } from "Styles";

import { ANIMATION_DURATION_TIME } from "./constants";
import { localStyles } from "./localStyles";

const Toggler = ({ isActive, setIsActive }) => {
  const [initialTranslateX, setInitialTranslateX] = useState(0);
  const [finalTranslateX, setFinalTranslateX] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isActive) {
      setInitialTranslateX(0);
      setFinalTranslateX(28);
      setStartAnimation(true);
    } else {
      setInitialTranslateX(28);
      setFinalTranslateX(0);
      setStartAnimation(true);
    }
  }, [isActive]);
  return (
    <>
      <AppTouchable
        heightInSize={30}
        bgColor={isActive ? "success" : "silver"}
        widthInSize={60}
        isCentralizedInX1Dir
        brRad={20}
        brColor="gray"
        brThickness={1}
        style={{ ...styles.shType1 }}
        touchableProps={{ onPress: () => setIsActive(!isActive) }}
        type="highlight-no-effect"
      >
        <AnimatedView
          widthInSize={30}
          bgColor="white"
          isFullHeight
          brRad={50}
          startAnimation={startAnimation}
          initialTranslateX={initialTranslateX}
          finalTranslateX={finalTranslateX}
          durationTime={ANIMATION_DURATION_TIME}
        ></AnimatedView>
      </AppTouchable>
    </>
  );
};

export default Toggler;
