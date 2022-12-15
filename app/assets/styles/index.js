import { StyleSheet } from "react-native";

import { textColors, bgColors } from "./modules/colors";
import {
  widthsInPercentages,
  heightInPercentages,
  widthsInSize,
  heightInSize,
} from "./modules/dimensions";
import {
  brColors,
  brRadiusInPer,
  brWidths,
  brRadiusInSize,
} from "./modules/borders";
import { shadowObject, elevationObj } from "./modules/shadows";
import { spaceObj } from "./modules/spaces";
import { flexObj, jcObj, aiObj, wrapObj, dirObj } from "./modules/flex";
import { fontStyleFunc } from "./modules/fonts";
import { zIndexObj } from "./modules/zIndex";

export const styles = StyleSheet.create({
  ...textColors,
  ...bgColors,
  ...widthsInSize,
  ...heightInSize,
  ...widthsInPercentages,
  ...heightInPercentages,
  ...brColors,
  ...brWidths,
  ...brRadiusInSize,
  ...brRadiusInPer,
  ...shadowObject,
  ...elevationObj,
  ...spaceObj,
  ...flexObj,
  ...jcObj,
  ...aiObj,
  ...wrapObj,
  ...dirObj,
  ...zIndexObj,
});

export { fontStyleFunc };
