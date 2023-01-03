import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";

import { getStoreData, removeStoreData } from "Utils/auth";
import { addAlertItem } from "Utils/notifications";
import { LOGOUT_API_ROUTE } from "Constants/apiRoutes";
import useApiCalls from "Hooks/useApiCalls";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";

import { notAuthenticated } from "Reducers/apiCalls/isAuthenticated";
import { removeProfile } from "Services/profile";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const LogoutComponent = () => {
  const dispatch = useDispatch();

  const [refreshToken, setRefreshToken] = useState(false);

  const logoutHandler = async () => {
    await removeStoreData("access_token");
    await removeStoreData("refresh_token");
    dispatch(notAuthenticated());
    removeProfile(dispatch);
    addAlertItem(dispatch, "You have successfully logged out.", "success");
  };

  const [sendLogoutReq, setSendLogoutReq] = useState(false);
  const bodyData = {
    refresh: refreshToken,
  };
  const { data, error } = useApiCalls({
    sendReq: sendLogoutReq,
    setSendReq: setSendLogoutReq,
    method: "POST",
    url: LOGOUT_API_ROUTE,
    bodyData,
  });
  useEffect(() => {
    if (data) {
      if (data?.success) {
        logoutHandler();
      }
    }
  }, [data]);

  useEffect(() => {
    if (refreshToken) {
      setSendLogoutReq(true);
    }
  }, [refreshToken]);

  const onPressHandler = async () => {
    const localRefreshToken = await getStoreData("refresh_token");
    if (localRefreshToken) {
      setRefreshToken(localRefreshToken);
    }
  };

  return (
    <>
      <Button btnText="Log out" onPress={onPressHandler} marginT={2} />
    </>
  );
};

export default LogoutComponent;
