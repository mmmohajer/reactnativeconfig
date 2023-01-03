import { View, Text } from "react-native";

import { getAllViewStyles } from "Utils/getStyles";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppView = ({ style, children, viewProps, ...props }) => {
  const appliedStyle = getAllViewStyles(props);
  return (
    <>
      <View style={{ ...appliedStyle, ...style }} {...viewProps}>
        {children}
      </View>
    </>
  );
};

export default AppView;
