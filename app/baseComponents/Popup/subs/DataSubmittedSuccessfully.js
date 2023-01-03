import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";

import { clearModal } from "Utils/modal";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const DataSubmittedSuccessfully = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button btnText="Close Modal" onPress={() => clearModal(dispatch)} />
    </>
  );
};

export default DataSubmittedSuccessfully;
