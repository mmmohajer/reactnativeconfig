import { View, Text } from "react-native";
import { useState } from "react";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Toggler from "BaseComponents/Toggler";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestToggler = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Toggler isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default TestToggler;
