import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import useApiCalls from "Hooks/useApiCalls";
import {
  REGISTER_API_ROUTE,
  RESEND_ACTIVATE_EMAIL_API_ROUTE,
} from "Constants/apiRoutes";
import { addAlertItem } from "Utils/notifications";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import TextBox from "BaseComponents/TextBox";
import Button from "BaseComponents/Button";
import Captcha from "BaseComponents/Captcha";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const RegisterComponent = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [userCaptchaCode, setUserCaptchaCode] = useState("");
  const [userCaptchaCodeErrorMessage, setUserCaptchaCodeErrorMessage] =
    useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaUUID, setCaptchaUUID] = useState("");
  const [sendUpdateCaptchaReq, setSendUpdateCaptchaReq] = useState(false);
  const [captchaId, setCaptchaId] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [sendRegisterReq, setSendRegisterReq] = useState(false);
  const bodyData = {
    first_name: firstName,
    last_name: lastName,
    email: email.toLowerCase(),
    password,
    captcha_uuid: captchaUUID,
    user_captcha_code: captchaCode,
  };
  const { data, error } = useApiCalls({
    sendReq: sendRegisterReq,
    setSendReq: setSendRegisterReq,
    method: "POST",
    url: REGISTER_API_ROUTE,
    bodyData,
  });

  useEffect(() => {
    if (data) {
      setSubmitted(true);
      addAlertItem(
        dispatch,
        "Please check your inbox to validate your email address. After activating your account you can login with your credentials",
        "success"
      );
      navigate.navigate("Login");
    }
  }, [data]);

  useEffect(() => {
    if (error && captchaId) {
      setSendUpdateCaptchaReq(true);
    }
  }, [error, captchaId]);

  const [sendResendEmailReq, setSendResendEmailReq] = useState(false);
  const bodyResendData = {
    email,
  };
  const { data: resendData, error: resendError } = useApiCalls({
    sendReq: sendResendEmailReq,
    setSendReq: setSendResendEmailReq,
    method: "POST",
    url: RESEND_ACTIVATE_EMAIL_API_ROUTE,
    bodyData: bodyResendData,
  });

  useEffect(() => {
    if (resendData) {
      addAlertItem(
        dispatch,
        "Please check your inbox to validate your email address.",
        "success"
      );
    }
  }, [resendData]);

  const customValidations = () => {
    let validated = true;
    if (!firstName) {
      setFirstNameErrorMessage("First name is required");
      validated = false;
    }
    if (!lastName) {
      setLastNameErrorMessage("Last name is required");
      validated = false;
    }
    if (!email) {
      setEmailErrorMessage("Email is required");
      validated = false;
    }
    if (!password) {
      setPasswordErrorMessage("Password is required");
    }
    if (!captchaCode) {
      setUserCaptchaCodeErrorMessage("Something went wrong, please try again");
      validated = false;
    }

    return validated;
  };

  const handleSubmit = () => {
    if (customValidations()) {
      setSendRegisterReq(true);
    }
  };

  return (
    <>
      <AppView>
        <Captcha
          setCaptchaCode={setCaptchaCode}
          setCaptchaUUID={setCaptchaUUID}
          sendUpdateCaptchaReq={sendUpdateCaptchaReq}
          setSendUpdateCaptchaReq={setSendUpdateCaptchaReq}
          captchaId={captchaId}
          setCaptchaId={setCaptchaId}
        />
        <TextBox
          textProps={{ color: "black", isBold: false }}
          iconName="email"
          placeholder="First Name"
          val={firstName}
          setVal={setFirstName}
          errorMessage={firstNameErrorMessage}
          setErrorMessage={setFirstNameErrorMessage}
        />
        <TextBox
          textProps={{ color: "black", isBold: false }}
          iconName="email"
          placeholder="Last Name"
          val={lastName}
          setVal={setLastName}
          errorMessage={lastNameErrorMessage}
          setErrorMessage={setLastNameErrorMessage}
        />
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
          placeholder="Password"
          val={password}
          setVal={setPassword}
          errorMessage={passwordErrorMessage}
          setErrorMessage={setPasswordErrorMessage}
          isSecure
        />
        <Button btnText="Register" onPress={handleSubmit} />
      </AppView>
    </>
  );
};

export default RegisterComponent;
