import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppImagePicker from "BaseComponents/AppImagePicker";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestImagePicker = () => {
  return (
    <>
      <AppImagePicker />
    </>
  );
};

export default TestImagePicker;
