import { Platform, Dimensions } from "react-native";
import { SOCKET_BASE_URL, PRODUCTION } from "Root/config";

export const isIOS = () => {
  return Platform.OS === "ios" ? true : false;
};

export const isAndroid = () => {
  return Platform.OS === "android" ? true : false;
};

export const getDeviceDimensions = () => {
  return { screen: Dimensions.get("screen"), window: Dimensions.get("window") };
};

export const generateKey = (length = 16) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.><,=-)(*&^%$#@!~";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const websocketApiRoute = (url) => {
  if (!PRODUCTION) {
    return `wss://${SOCKET_BASE_URL}${url}`;
  } else {
    return `wss://${SOCKET_BASE_URL}${url}`;
  }
};
