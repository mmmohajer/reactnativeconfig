import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import TextBox from "BaseComponents/TextBox";
import Button from "BaseComponents/Button";

import useApiCalls from "Hooks/useApiCalls";
import { loginUser } from "Utils/auth";
import { LOGIN_API_ROUTE } from "Constants/apiRoutes";

import { addAlertItem } from "Utils/notifications";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const LoginComponent = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [keepLoggedIn, setKeepLoggedIn] = useState(true);

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      navigate.navigate("Home");
    }
  }, [isAuthenticated]);

  const [sendLoginReq, setSendLoginReq] = useState(false);
  const bodyData = {
    email: email.toLowerCase(),
    password,
    keep_logged_in: keepLoggedIn,
  };
  const { data, error } = useApiCalls({
    sendReq: sendLoginReq,
    setSendReq: setSendLoginReq,
    method: "POST",
    url: LOGIN_API_ROUTE,
    bodyData,
    showLoading: true,
    closeLoading: false,
  });

  useEffect(() => {
    if (data) {
      loginUser(data["access"], data["refresh"], dispatch);
    }
  }, [data]);

  const validate = () => {
    let isValidate = true;
    if (!email) {
      isValidate = false;
      setEmailErrorMessage("Email is required");
    }
    if (!password) {
      isValidate = false;
      setPasswordErrorMessage("Password is required");
    }
    return isValidate;
  };

  const onLoginPressHandler = () => {
    if (validate()) {
      setSendLoginReq(true);
    }
  };

  return (
    <>
      <AppView>
        <TextBox
          textProps={{ color: "black", isBold: false }}
          iconName="email"
          placeholder="Email"
          val={email}
          setVal={setEmail}
          errorMessage={emailErrorMessage}
          setErrorMessage={setEmailErrorMessage}
        />
        <TextBox
          textProps={{ color: "black", isBold: false }}
          iconName="email"
          isSecure
          placeholder="Password"
          val={password}
          setVal={setPassword}
          errorMessage={passwordErrorMessage}
          setErrorMessage={setPasswordErrorMessage}
        />
        <Button btnText="Login" onPress={onLoginPressHandler} />
      </AppView>
    </>
  );
};

export default LoginComponent;
