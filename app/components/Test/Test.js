import { View, Text, ScrollView } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import { isIOS, isAndroid, getDeviceDimensions } from "Utils/helpers";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppImage from "BaseComponents/AppImage";
import Button from "BaseComponents/Button";
import Icon from "BaseComponents/Icon";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Test = () => {
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  return (
    <>
      <ScrollView>
        <AppView
          bgColor="yellow"
          widthInSize={200}
          heightInSize={200}
          brRadTL={50}
          brRadTR={20}
          brRadBL={10}
          brRadBr={0}
          brColorT="red"
          brColorR="green"
          brColorB="purple"
          brColorL="silver"
          brThicknessT={2}
          brThicknessB={10}
          brThicknessL={15}
          brThicknessR={5}
          paddingT={2}
          paddingB={2}
          paddingL={2}
          paddingR={2}
          // marginT={8}
          marginB={4}
          marginL={5}
          style={{ ...styles.shType1, ...styles.sh50, ...localStyles.test }}
        >
          <AppText color="red" isBold lineHeight={20} isCenterAlign>
            Hello {isIOS() && "IOS"} {isAndroid() && "android"}
          </AppText>
          <AppText>
            Normal Text{" "}
            {getDeviceDimensions()?.window?.width >= 400 && <Text>Yes!!!</Text>}
          </AppText>
          <Icon name="email" size={50} />
        </AppView>
        <Button
          btnText={"submit"}
          iconType="email"
          onPress={() => console.log("Hello")}
          onLongPress={() => console.log("Bye")}
          marginL={4}
          style={{ ...styles.h80 }}
        />
        <AppImage
          isFromUri={true}
          src="https://picsum.photos/id/237/200/300"
          width={200}
          height={200}
          imageProps={{ blurRadius: 4 }}
          margin={4}
          // isFromUri={false}
          // src={require("Images/general/icon.png")}
        />

        <AppImage
          isFromUri={true}
          src="https://picsum.photos/id/237/200/300"
          width={200}
          height={200}
          imageProps={{ blurRadius: 4 }}
          margin={4}
          // isFromUri={false}
          // src={require("Images/general/icon.png")}
        />
        <AppImage
          isFromUri={true}
          src="https://picsum.photos/id/237/200/300"
          width={200}
          height={200}
          imageProps={{ blurRadius: 4 }}
          margin={4}
          // isFromUri={false}
          // src={require("Images/general/icon.png")}
        />
        <AppImage
          isFromUri={true}
          src="https://picsum.photos/id/237/200/300"
          width={200}
          height={200}
          imageProps={{ blurRadius: 4 }}
          margin={4}
          // isFromUri={false}
          // src={require("Images/general/icon.png")}
        />
        <AppImage
          isFromUri={true}
          src="https://picsum.photos/id/237/200/300"
          width={200}
          height={200}
          imageProps={{ blurRadius: 4 }}
          margin={4}
          // isFromUri={false}
          // src={require("Images/general/icon.png")}
        />
      </ScrollView>
    </>
  );
};

export default Test;
