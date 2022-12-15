import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AnimatedView from "BaseComponents/AnimatedView";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestAnimatedView = () => {
  return (
    <>
      <AnimatedView
        heightInSize={60}
        widthInSize={60}
        bgColor="red"
        zIndex={2}
        initialTranslateX={0}
        finalTranslateX={200}
        initialTranslateY={0}
        finalTranslateY={50}
        initialRotation={0}
        finalRotation={0.125}
        initialOpacity={0}
        finalOpacity={1}
        durationTime={10000}
        startAnimation={true}
      ></AnimatedView>
    </>
  );
};

export default TestAnimatedView;
