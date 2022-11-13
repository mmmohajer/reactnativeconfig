import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import BaseTemplate from "Components/BaseTemplate";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const ScreenContainer = ({ children }) => {
  return (
    <>
      <BaseTemplate>{children}</BaseTemplate>
    </>
  );
};

export default ScreenContainer;
