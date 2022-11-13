import { View, Image } from "react-native";

import AppView from "../AppView";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppImage = ({
  isFromUri = true,
  width = null,
  height = null,
  src = null,
  style,
  imageProps,
  ...props
}) => {
  let imageStyles = {};
  if (width) {
    imageStyles = { ...imageStyles, ...styles[`w${width}`] };
  }
  if (height) {
    imageStyles = { ...imageStyles, ...styles[`h${height}`] };
  }
  return (
    <>
      <AppView {...props}>
        {isFromUri && (
          <Image
            source={{ width, height, uri: src }}
            style={imageStyles}
            {...imageProps}
          />
        )}
        {!isFromUri && src ? <Image source={src} style={imageStyles} /> : ""}
      </AppView>
    </>
  );
};

export default AppImage;
