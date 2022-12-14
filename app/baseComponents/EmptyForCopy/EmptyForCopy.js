import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const EmptyForCopy = () => {
  return (
    <>
      <AppView>
        <AppText>EmptyForCopy</AppText>
      </AppView>
    </>
  );
};

export default EmptyForCopy;
