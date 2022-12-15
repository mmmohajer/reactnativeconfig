import { View, Text } from "react-native";
import { useState } from "react";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";
import AppModal from "BaseComponents/AppModal";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestModal = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Button
        btnText={"View Modal"}
        // iconType="email"
        onPress={() => setIsActive(true)}
        marginL={4}
        marginB={4}
      />
      <AppModal isActive={isActive}>
        <Button
          btnText={"Close Modal"}
          // iconType="email"
          onPress={() => setIsActive(false)}
          marginL={4}
          marginB={4}
        />
      </AppModal>
    </>
  );
};

export default TestModal;
