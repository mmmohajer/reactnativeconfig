import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import AppTouchable from "BaseComponents/AppTouchable";
import Icon from "BaseComponents/Icon";
import AppImage from "BaseComponents/AppImage";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppImagePicker = () => {
  const [imgUri, setImgUri] = useState("");

  const requestPermission = async () => {
    try {
      const res = await ImagePicker.requestCameraPermissionsAsync();
      if (!res.granted) {
        alert("You need to enable permission to access the library.");
      }
    } catch (err) {
      console, log(err);
    }
  };

  const handleImageSelector = async () => {
    if (!imgUri) {
      try {
        const res = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    } else {
      setImgUri("");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <>
      <AppTouchable
        type="highlight-no-effect"
        touchableProps={{ onPress: () => handleImageSelector() }}
        widthInSize={100}
        bgColor="gray"
        heightInSize={100}
        brRad={10}
        brColor="black"
        brThickness={2}
        isCentralizedInX1Dir
        isCentralizedInX2Dir
      >
        <>
          <Icon name="image" size={50} color="white" />
          {imgUri && (
            <AppImage
              isFromUri={true}
              src={imgUri}
              width={50}
              height={50}
              imgProps={{ blurRadius: 0, borderRadius: 100 }}
              isCentralizedInX1Dir={true}
              isCentralizedInX2Dir={true}
              brRad={20}
            />
          )}
        </>
      </AppTouchable>
    </>
  );
};

export default AppImagePicker;
