import { View, Text } from "react-native";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppText = ({
  color = "black",
  isBold = false,
  isCenterAlign = false,
  isItalic = false,
  isCapitalize = false,
  lineHeight = null,
  textAlign = null,
  fontFamily = null,
  fontSize = 16,
  fontWeight = null,
  textTransform = null,
  children,
}) => {
  let appliedStyle = {};

  if (isBold) {
    appliedStyle = { ...appliedStyle, isBold };
  }
  if (color) {
    appliedStyle = { ...appliedStyle, color };
  }
  if (isCenterAlign) {
    appliedStyle = { ...appliedStyle, isCenterAlign };
  }
  if (isItalic) {
    appliedStyle = { ...appliedStyle, isItalic };
  }
  if (isCapitalize) {
    appliedStyle = { ...appliedStyle, isCapitalize };
  }
  if (lineHeight) {
    appliedStyle = { ...appliedStyle, lineHeight };
  }
  if (textAlign) {
    appliedStyle = { ...appliedStyle, textAlign };
  }
  if (fontFamily) {
    appliedStyle = { ...appliedStyle, fontFamily };
  }
  if (fontSize) {
    appliedStyle = { ...appliedStyle, fontSize };
  }
  if (fontWeight) {
    appliedStyle = { ...appliedStyle, fontWeight };
  }
  if (textTransform) {
    appliedStyle = { ...appliedStyle, textTransform };
  }
  return (
    <>
      <Text style={{ ...fontStyleFunc(appliedStyle) }}>{children}</Text>
    </>
  );
};

export default AppText;
