import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AuthRoute = ({ children }) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [isChecked, setIsChecked] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (isAuthenticated?.isChecked && !isAuthenticated?.authenticated) {
      setIsAuthUser(false);
      setIsChecked(true);
    }
    if (isAuthenticated?.isChecked && isAuthenticated?.authenticated) {
      setIsChecked(true);
      setIsAuthUser(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isChecked && !isAuthUser) {
      let currentTime = time;
      if (time > 0) {
        setTimeout(() => {
          currentTime -= 1;
          setTime(currentTime);
        }, 1000);
      }
      if (time === 0) {
        navigate.navigate("LoginStack");
      }
    }
  }, [isChecked, isAuthUser, time]);

  return (
    <>
      {isChecked && isAuthUser ? children : ""}
      {isChecked && !isAuthUser ? (
        <AppView>
          <AppText>The content of this page is private</AppText>
          <AppText>You will be redirected to home page in {time}s</AppText>
        </AppView>
      ) : (
        ""
      )}
    </>
  );
};

export default AuthRoute;
