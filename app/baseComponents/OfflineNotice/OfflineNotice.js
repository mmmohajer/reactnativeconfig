import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  return (
    <>
      {netInfo.type !== "unknown" && netInfo.isInternetReachable === false ? (
        <AppView>
          <AppText>OfflineNotice</AppText>
        </AppView>
      ) : (
        ""
      )}
    </>
  );
};

export default OfflineNotice;
