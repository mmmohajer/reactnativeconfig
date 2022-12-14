import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { getAllViewStyles } from "Utils/getStyles";
import { colors } from "Styles/base/vars";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppTouchable = ({
  type = "highlight",
  children,
  touchableProps,
  style,
  ...props
}) => {
  const appliedStyle = getAllViewStyles(props);
  return (
    <>
      {type === "highlight" && (
        <TouchableHighlight
          style={{ ...appliedStyle, ...style }}
          underlayColor={colors.themeOne}
          {...touchableProps}
        >
          {children}
        </TouchableHighlight>
      )}

      {type === "highlight-no-effect" && (
        <TouchableHighlight
          style={{ ...appliedStyle, ...style }}
          underlayColor="none"
          {...touchableProps}
        >
          {children}
        </TouchableHighlight>
      )}

      {type === "opacity" && (
        <TouchableOpacity
          {...touchableProps}
          style={{ ...appliedStyle, ...style }}
        >
          {children}
        </TouchableOpacity>
      )}

      {type === "noFeedback" && (
        <TouchableWithoutFeedback
          {...touchableProps}
          style={{ ...appliedStyle, ...style }}
        >
          <AppView style={{ ...appliedStyle }}>{children}</AppView>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default AppTouchable;
