import { Platform, Dimensions } from "react-native";

export const isIOS = () => {
  return Platform.OS === "ios" ? true : false;
};

export const isAndroid = () => {
  return Platform.OS === "android" ? true : false;
};

export const getDeviceDimensions = () => {
  return { screen: Dimensions.get("screen"), window: Dimensions.get("window") };
};
