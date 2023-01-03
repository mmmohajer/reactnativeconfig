import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";

import { addAlertItem } from "Utils/notifications";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const EmptyForCopy = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AppView>
        <Button
          btnText="Show Alert"
          onPress={() => {
            addAlertItem(dispatch, "That is fine!", "success");
            addAlertItem(dispatch, "That is fine!", "error");
            addAlertItem(dispatch, "That is fine!", "warning");
          }}
        />
      </AppView>
    </>
  );
};

export default EmptyForCopy;
