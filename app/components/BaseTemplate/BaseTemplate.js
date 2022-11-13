import { View, Text, SafeAreaView, StatusBar } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { isAndroid } from "Utils/helpers";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const BaseTemplate = ({ children }) => {
  return (
    <>
      <SafeAreaView
        style={{ paddingTop: isAndroid() && StatusBar.currentHeight }}
      >
        {children}
      </SafeAreaView>
    </>
  );
};

export default BaseTemplate;
