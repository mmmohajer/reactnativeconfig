import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import useApiCalls from "Hooks/useApiCalls";
import { CAPTCHA_API_ROUTE } from "Constants/apiRoutes";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Captcha = ({
  setCaptchaCode,
  setCaptchaUUID,
  sendUpdateCaptchaReq,
  setSendUpdateCaptchaReq,
  captchaId,
  setCaptchaId,
}) => {
  // const [captchaId, setCaptchaId] = useState("");

  const [sendReq, setSendReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq,
    setSendReq,
    method: "POST",
    url: CAPTCHA_API_ROUTE,
    showLoading: false,
  });
  useEffect(() => {
    if (data) {
      setCaptchaUUID(data.uuid);
      setCaptchaCode(data.captcha);
      setCaptchaId(data.id);
    }
  }, [data]);

  useEffect(() => {
    setSendReq(true);
  }, []);

  const { data: updateData, error: updateError } = useApiCalls({
    sendReq: sendUpdateCaptchaReq,
    setSendReq: setSendUpdateCaptchaReq,
    method: "PUT",
    url: `${CAPTCHA_API_ROUTE}${captchaId}/`,
    showLoading: false,
  });
  useEffect(() => {
    if (updateData) {
      setCaptchaUUID(updateData.uuid);
      setCaptchaCode(updateData.captcha);
      setCaptchaId(updateData.id);
      setSendUpdateCaptchaReq(false);
    }
  }, [updateData]);

  return <></>;
};

export default Captcha;
