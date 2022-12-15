import { View, Text } from "react-native";
import { useState } from "react";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppSwitch from "BaseComponents/AppSwitch";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestSwitch = () => {
  const [chaecked, setChecked] = useState(false);

  return (
    <>
      <AppSwitch val={chaecked} setVal={setChecked} />
    </>
  );
};

export default TestSwitch;
