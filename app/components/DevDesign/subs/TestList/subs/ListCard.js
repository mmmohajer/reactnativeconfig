import { View, Text, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppImage from "BaseComponents/AppImage";
import AppTouchable from "BaseComponents/AppTouchable";

import { colors } from "Styles/base/vars";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../../../localStyles";

const ListCard = ({ title, content, image, onPress, onLongPress = null }) => {
  return (
    <>
      <AppView isCentralizedInX2Dir={true} marginR={4}>
        <Swipeable
          renderRightActions={() => (
            <AppView>
              <AppText>Hello</AppText>
            </AppView>
          )}
        >
          <AppTouchable
            type="noFeedback"
            touchableProps={{ onPress, onLongPress }}
            widthInSize={200}
          >
            <AppView
              widthInSize={200}
              style={{ ...styles.shType1 }}
              isCentralizedInX1Dir={true}
            >
              <AppImage
                isFromUri={true}
                src={image}
                width={200}
                height={200}
                imageProps={{ blurRadius: 1, borderRadius: 15 }}
                isCentralizedInX1Dir={true}
                isCentralizedInX2Dir={true}
                brRad={10}
                brColor="red"
              />
              <AppText bgColor="yellow" padding={1} isCenterAlign={true}>
                {title}
              </AppText>
              <AppText
                bgColor="green"
                padding={1}
                brThickness={2}
                brRad={5}
                brColor="red"
              >
                {content}
              </AppText>
            </AppView>
          </AppTouchable>
        </Swipeable>
      </AppView>
    </>
  );
};

export default ListCard;
