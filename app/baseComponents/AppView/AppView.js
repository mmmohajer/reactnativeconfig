import { View, Text } from "react-native";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppView = ({
  dircetion = "vertical",
  isFullHeight = false,
  isFullWidth = false,
  heightInPercentage = null,
  widthInPercentage = null,
  heightInSize = null,
  widthInSize = null,
  brThickness = null,
  brThicknessL = null,
  brThicknessT = null,
  brThicknessB = null,
  brThicknessR = null,
  brColor = null,
  brColorL = null,
  brColorT = null,
  brColorB = null,
  brColorR = null,
  brRad = null,
  brRadTL = null,
  brRadTR = null,
  brRadBL = null,
  brRadBR = null,
  brRadPer = null,
  brRadTLPer = null,
  brRadTRPer = null,
  brRadBLPer = null,
  brRadBRPer = null,
  padding = null,
  paddingL = null,
  paddingT = null,
  paddingB = null,
  paddingR = null,
  margin = null,
  marginL = null,
  marginT = null,
  marginB = null,
  marginR = null,
  isCentralizedInX1Dir = false,
  isCentralizedInX2Dir = false,
  isDistributedBetweenInX1Dir = false,
  isDistributedBetweenInX2Dir = false,
  isDistributedAroundInX1Dir = false,
  isDistributedAroundInX2Dir = false,
  isReversedInX1Dir = false,
  isReversedInX2Dir = false,
  bgColor = null,
  children,
  style = null,
  flex_wrap = false,
  flex_wrap_reverse = false,
}) => {
  let appliedStyle = {};
  if (dircetion === "horizontal") {
    appliedStyle = { ...appliedStyle, ...styles.flex_dir_row };
  }
  if (dircetion === "h-reverse") {
    appliedStyle = { ...appliedStyle, ...styles.flex_dir_row_reverse };
  }
  if (dircetion === "v-reverse") {
    appliedStyle = { ...appliedStyle, ...styles.flex_dir_col_reverse };
  }
  if (isFullHeight) {
    appliedStyle = { ...appliedStyle, ...styles.flex_1 };
  }
  if (isFullWidth) {
    appliedStyle = { ...appliedStyle, ...styles.wPer100 };
  }
  if (heightInPercentage) {
    appliedStyle = { ...appliedStyle, ...styles[`hPer${heightInPercentage}`] };
  }
  if (widthInPercentage) {
    appliedStyle = { ...appliedStyle, ...styles[`wPer${widthInPercentage}`] };
  }
  if (heightInSize) {
    appliedStyle = { ...appliedStyle, ...styles[`h${heightInSize}`] };
  }
  if (widthInSize) {
    appliedStyle = { ...appliedStyle, ...styles[`w${widthInSize}`] };
  }
  if (brThickness) {
    appliedStyle = { ...appliedStyle, ...styles[`brThickness${brThickness}`] };
  }
  if (brThicknessL) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brThicknessL${brThicknessL}`],
    };
  }
  if (brThicknessT) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brThicknessT${brThicknessT}`],
    };
  }
  if (brThicknessB) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brThicknessB${brThicknessB}`],
    };
  }
  if (brThicknessR) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brThicknessR${brThicknessR}`],
    };
  }
  if (brColor) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brColor${brColor[0].toUpperCase() + brColor.slice(1)}`],
    };
  }
  if (brColorL) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brColorL${brColorL[0].toUpperCase() + brColorL.slice(1)}`],
    };
  }
  if (brColorT) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brColorT${brColorT[0].toUpperCase() + brColorT.slice(1)}`],
    };
  }
  if (brColorB) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brColorB${brColorB[0].toUpperCase() + brColorB.slice(1)}`],
    };
  }
  if (brColorR) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brColorR${brColorR[0].toUpperCase() + brColorR.slice(1)}`],
    };
  }
  if (brRad) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRad${brRad}`],
    };
  }
  if (brRadTL) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadTL${brRadTL}`],
    };
  }
  if (brRadTR) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadTR${brRadTR}`],
    };
  }
  if (brRadBL) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadBL${brRadBL}`],
    };
  }
  if (brRadBR) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadBR${brRadBR}`],
    };
  }
  if (brRadPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadPer${brRadPer}`],
    };
  }
  if (brRadTLPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadTLPer${brRadTLPer}`],
    };
  }
  if (brRadTRPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadTRPer${brRadTRPer}`],
    };
  }
  if (brRadBLPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadBLPer${brRadBLPer}`],
    };
  }
  if (brRadBRPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadBRPer${brRadBRPer}`],
    };
  }
  if (padding) {
    appliedStyle = { ...appliedStyle, ...styles[`p${padding}`] };
  }
  if (paddingL) {
    appliedStyle = { ...appliedStyle, ...styles[`pL${paddingL}`] };
  }
  if (paddingT) {
    appliedStyle = { ...appliedStyle, ...styles[`pT${paddingT}`] };
  }
  if (paddingB) {
    appliedStyle = { ...appliedStyle, ...styles[`pB${paddingB}`] };
  }
  if (paddingR) {
    appliedStyle = { ...appliedStyle, ...styles[`pR${paddingR}`] };
  }
  if (margin) {
    appliedStyle = { ...appliedStyle, ...styles[`m${margin}`] };
  }
  if (marginL) {
    appliedStyle = { ...appliedStyle, ...styles[`mL${marginL}`] };
  }
  if (marginT) {
    appliedStyle = { ...appliedStyle, ...styles[`mT${marginT}`] };
  }
  if (marginB) {
    appliedStyle = { ...appliedStyle, ...styles[`mB${marginB}`] };
  }
  if (marginR) {
    appliedStyle = { ...appliedStyle, ...styles[`mR${marginR}`] };
  }
  if (isCentralizedInX1Dir) {
    appliedStyle = { ...appliedStyle, ...styles.jc_center };
  }
  if (isCentralizedInX2Dir) {
    appliedStyle = { ...appliedStyle, ...styles.align_item_center };
  }
  if (isDistributedBetweenInX1Dir) {
    appliedStyle = { ...appliedStyle, ...styles.jc_distributedBetween };
  }
  if (isDistributedBetweenInX2Dir) {
    appliedStyle = { ...appliedStyle, ...styles.align_item_distributedBetween };
  }
  if (isDistributedAroundInX1Dir) {
    appliedStyle = { ...appliedStyle, ...styles.jc_distributedAround };
  }
  if (isDistributedAroundInX2Dir) {
    appliedStyle = { ...appliedStyle, ...styles.align_item_distributedAround };
  }

  if (isReversedInX1Dir) {
    appliedStyle = { ...appliedStyle, ...styles.jc_end };
  }
  if (isReversedInX2Dir) {
    appliedStyle = { ...appliedStyle, ...styles.align_item_end };
  }
  if (bgColor) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`bg${bgColor[0].toUpperCase() + bgColor.slice(1)}`],
    };
  }
  if (style) {
    appliedStyle = {
      ...appliedStyle,
      ...style,
    };
  }
  if (flex_wrap) {
    appliedStyle = {
      ...appliedStyle,
      ...styles.flex_wrap_yes,
    };
  }
  if (flex_wrap_reverse) {
    appliedStyle = {
      ...appliedStyle,
      ...styles.flex_wrap_reverse,
    };
  }
  return (
    <>
      <View style={{ ...appliedStyle }}>{children}</View>
    </>
  );
};

export default AppView;
