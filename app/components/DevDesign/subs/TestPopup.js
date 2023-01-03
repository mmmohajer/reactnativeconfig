import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";
import Popup from "BaseComponents/Popup";

import { setModalType } from "Reducers/general/modalType";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const EmptyForCopy = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        btnText="Show Popup"
        onPress={() => dispatch(setModalType("data_submitted_successfully"))}
      />
    </>
  );
};

export default EmptyForCopy;
