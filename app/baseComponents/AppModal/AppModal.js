import { View, Text, Modal, SafeAreaView, StatusBar } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { isAndroid } from "Utils/helpers";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppModal = ({ isActive, setIsActive, children }) => {
  return (
    <>
      <Modal visible={isActive} animationType="slide">
        <SafeAreaView
          style={{ paddingTop: isAndroid() && StatusBar.currentHeight }}
        >
          {children}
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default AppModal;
