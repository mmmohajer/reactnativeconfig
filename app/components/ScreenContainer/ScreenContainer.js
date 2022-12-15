import { View, Text, ScrollView } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import BaseTemplate from "Components/BaseTemplate";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const ScreenContainer = ({ isScrollable = false, children }) => {
  return (
    <>
      <BaseTemplate>
        {isScrollable ? <ScrollView>{children}</ScrollView> : children}
      </BaseTemplate>
    </>
  );
};

export default ScreenContainer;
