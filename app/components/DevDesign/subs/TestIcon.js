import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Icon from "BaseComponents/Icon";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestIcon = () => {
  return (
    <>
      <Icon name="email" size={50} />
    </>
  );
};

export default TestIcon;
