import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppView from "BaseComponents/AppView";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Icon = ({ name = "email", size = 20, color = "black", ...props }) => {
  return (
    <>
      <AppView
        isCentralizedInX1Dir={true}
        isCentralizedInX2Dir={true}
        {...props}
      >
        {name === "email" && (
          <MaterialCommunityIcons name="email" size={size} color={color} />
        )}
        {name === "image" && (
          <MaterialCommunityIcons name="image" size={size} color={color} />
        )}
      </AppView>
    </>
  );
};

export default Icon;
