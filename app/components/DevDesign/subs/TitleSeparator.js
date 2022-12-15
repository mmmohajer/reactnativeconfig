import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TitleSeparator = ({ title = "" }) => {
  return (
    <>
      <AppText
        bgColor="blue"
        marginT={2}
        marginB={2}
        padding={2}
        textProps={{ isBold: true, color: "white", textTransform: "uppercase" }}
      >
        {title}
      </AppText>
    </>
  );
};

export default TitleSeparator;
