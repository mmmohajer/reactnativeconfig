import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestButton = () => {
  return (
    <>
      <Button
        btnText={"submit"}
        iconType="email"
        onPress={() => console.log("Hello")}
        onLongPress={() => console.log("Bye")}
        marginL={4}
        marginB={4}
        style={{ ...styles.h80 }}
      />
    </>
  );
};

export default TestButton;
