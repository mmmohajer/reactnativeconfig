import { colors } from "../base/vars";

// -----------------------------------------------------------

export const fontStyleFunc = ({
  fontFamily = "",
  fontSize = "",
  fontStyle = "",
  fontWeight = "",
  textTransform = "",
  textAlign = "",
  lineHeight = false,
  isCapitalize = false,
  isItalic = false,
  isBold = false,
  isCenterAlign = false,
  isRightAlign = false,
  color = "",
}) => {
  const styles = {};
  if (fontFamily) {
    styles.fontFamily = fontFamily;
  }
  if (fontSize) {
    styles.fontSize = fontSize;
  }
  if (fontStyle) {
    styles.fontStyle = fontStyle;
  }
  if (fontWeight) {
    styles.fontWeight = fontWeight;
  }
  if (textTransform) {
    styles.textTransform = textTransform;
  }
  if (textAlign) {
    styles.textAlign = textAlign;
  }
  if (lineHeight) {
    styles.lineHeight = lineHeight;
  }
  if (isCapitalize) {
    styles.textTransform = "capitalize";
  }
  if (isItalic) {
    styles.fontStyle = "italic";
  }
  if (isBold) {
    styles.fontWeight = "bold";
  }
  if (isCenterAlign) {
    styles.textAlign = "center";
  }
  if (isRightAlign) {
    styles.textAlign = "right";
  }
  if (color && color in colors) {
    styles.color = colors[color];
  }
  return styles;
};
