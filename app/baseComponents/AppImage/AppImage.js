import { View, Image } from "react-native";

import AppView from "../AppView";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppImage = ({
  isFromUri = true,
  width = null,
  height = null,
  src = null,
  imgStyle,
  style,
  imgProps,
  ...props
}) => {
  return (
    <>
      <AppView {...props}>
        {isFromUri && (
          <Image
            source={{ width, height, uri: src }}
            style={imgStyle}
            {...imgProps}
          />
        )}
        {!isFromUri && src ? (
          <Image source={src} style={imgStyle} {...imgProps} />
        ) : (
          ""
        )}
      </AppView>
    </>
  );
};

export default AppImage;
