import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppSwipeable from "BaseComponents/AppSwipeable";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestSwipeable = () => {
  return (
    <>
      <AppSwipeable
        bgColor="red"
        direction="col"
        onSwipeRight={() => (
          <AppText
            bgColor="red"
            // widthInSize={60}
            isCentralizedInX1Dir
            isCentralizedInX2Dir
            color="white"
            paddingL={2}
            paddingR={2}
          >
            Right
          </AppText>
        )}
        onSwipeLeft={() => (
          <AppText
            // widthInSize={60}
            bgColor="blue"
            isCentralizedInX1Dir
            isCentralizedInX2Dir
            color="white"
            paddingL={2}
            paddingR={2}
          >
            Left Side
          </AppText>
        )}
      >
        <AppText padding={2} bgColor="silver">
          Hello Mohammad
        </AppText>
      </AppSwipeable>
    </>
  );
};

export default TestSwipeable;
