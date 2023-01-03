import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";

import { createAlert } from "Utils/alert";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestPrompt = () => {
  return (
    <>
      <AppView paddingL={2}>
        <Button
          marginB={2}
          btnText="Show 3 Buttons Alert"
          onPress={() =>
            createAlert({
              isAlert: true,
              title: "Alert",
              message: "This is an alert",
              buttons: [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK") },
                { text: "Ask Later", onPress: () => console.log("Ask later") },
              ],
            })
          }
        />

        <Button
          marginB={2}
          btnText="Show Simple Input Prompt"
          onPress={() =>
            createAlert({
              isAlert: false,
              title: "Get Email",
              message: "Please let us know what your email is",
              buttons: [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel"),
                  style: "cancel",
                },
                { text: "OK", onPress: (email) => console.log(email) },
              ],
              option: "plain-text",
            })
          }
        />

        <Button
          btnText="Show Secure Input Prompt"
          onPress={() =>
            createAlert({
              isAlert: false,
              title: "Get Password",
              message: "Please let us know what your password is",
              buttons: [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel"),
                  style: "cancel",
                },
                { text: "OK", onPress: (password) => console.log(password) },
              ],
              option: "secure-text",
            })
          }
        />
      </AppView>
    </>
  );
};

export default TestPrompt;
