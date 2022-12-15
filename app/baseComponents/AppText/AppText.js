import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";

import { getAllTextStyles } from "Utils/getStyles";
import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppText = ({ children, textProps, ...props }) => {
  const appliedStyle = getAllTextStyles(textProps);

  return (
    <>
      <AppView {...props}>
        <Text style={{ ...appliedStyle }} {...textProps}>
          {children}
        </Text>
      </AppView>
    </>
  );
};

export default AppText;
