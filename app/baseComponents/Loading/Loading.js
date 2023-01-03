import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { getDeviceDimensions } from "Utils/helpers";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Loading = () => {
  const loading = useSelector((state) => state.loading);

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
        <AppText bgColor="red" padding={2} textProps={{ color: "white" }}>
          Loading...
        </AppText>
      </AppView>
    </>
  );
};

export default Loading;
