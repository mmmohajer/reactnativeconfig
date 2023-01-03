import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { getDeviceDimensions } from "Utils/helpers";

import { styles, fontStyleFunc } from "Styles";

import DataSubmittedSuccessfully from "./subs/DataSubmittedSuccessfully";
import { localStyles } from "./localStyles";

const Popup = ({ children }) => {
  const modalType = useSelector((state) => state.modalType);
  const modalProps = useSelector((state) => state.modalProps);

  return (
    <>
      <AppView
        zIndex={2}
        style={{
          position: "absolute",
          height: getDeviceDimensions().screen.height,
        }}
        isFullWidth
        isCentralizedInX1Dir
        isCentralizedInX2Dir
      >
        <AppView
          bgColor="gray"
          heightInPercentage={100}
          isFullWidth
          isCentralizedInX1Dir
          isCentralizedInX2Dir
          opacity={0.7}
          style={{ position: "absolute" }}
        />
        {modalType === "data_submitted_successfully" && (
          <DataSubmittedSuccessfully {...modalProps} />
        )}
      </AppView>
    </>
  );
};

export default Popup;
