import { View, Text, Alert } from "react-native";

export const createAlert = ({ isAlert, title, message, buttons, option }) => {
  if (isAlert) {
    return Alert.alert(title, message, buttons, option);
  } else {
    return Alert.prompt(title, message, buttons, option);
  }
};
