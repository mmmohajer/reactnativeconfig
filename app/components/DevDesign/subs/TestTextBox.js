import { View, Text } from "react-native";
import { useState } from "react";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import TextBox from "BaseComponents/TextBox";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestTextBox = () => {
  const [name, setName] = useState("");

  return (
    <>
      <AppView marginL={2} marginR={2}>
        <TextBox
          textProps={{ color: "black", isBold: true }}
          // inputProps={{
          //   keyboardType: "ascii-capable",
          // }}
          // autoFocus
          isSecure
          iconName="email"
          placeholder="Type something"
          val={name}
          setVal={setName}
        />
        <TextBox
          textProps={{ color: "red", isBold: true }}
          inputProps={{
            // keyboardType: "numeric",
            clearButtonMode: "always",
          }}
          isMultiLine={true}
          heightInSize={200}
        />
      </AppView>
    </>
  );
};

export default TestTextBox;
