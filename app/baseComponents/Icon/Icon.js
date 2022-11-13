import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Icon = ({ name = "email", size = 20, color = "black" }) => {
  return (
    <>
      <View>
        {name === "email" && (
          <MaterialCommunityIcons name="email" size={size} color={color} />
        )}
      </View>
    </>
  );
};

export default Icon;
