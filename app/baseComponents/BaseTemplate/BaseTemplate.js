import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as Notifications from "expo-notifications";

import { isAndroid } from "Utils/helpers";
import { getStoreData, setStoreData, removeStoreData } from "Utils/auth";
import { authenticated, notAuthenticated } from "Services/auth";
import { getProfile } from "Services/profile";
import useApiCalls from "Hooks/useApiCalls";
import { ACCESS_TOKEN_CHEANGE_TIME } from "Constants/vars";
import {
  REFRESH_TOKEN_API_ROUTE,
  MY_PROFILE_API_ROUTE,
  AUTHENTICATE_USER_API_ROUTE,
  EXPO_NOTIFICATION_TOKEN_API_ROUTE,
} from "Constants/apiRoutes";
import { isLoaded } from "Reducers/general/loading";

import { localStyles } from "./localStyles";

const BaseTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const profile = useSelector((state) => state.profile);

  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expoNotificationToken, setExpoNotificationToken] = useState("");
  const [sendGetCurUserReq, setSendGetCurUserReq] = useState(false);
  const [sendAuthenticatedReq, setSendAuthenticatedReq] = useState(false);
  const [sendrefreshTokenReq, setSendRefreshTokenReq] = useState(false);
  const [sendRepeatedrefreshTokenReq, setSendRepeatedRefreshTokenReq] =
    useState(false);
  const [sendExpoNotificationTokenReq, setSendExpoNotificationTokenReq] =
    useState(false);

  const retrieveToken = async () => {
    const localRefreshToken = await getStoreData("refresh_token");
    if (localRefreshToken) {
      setRefreshToken(localRefreshToken);
    } else {
      await removeStoreData("access_token");
      await removeStoreData("refresh_token");
      notAuthenticated(dispatch);
    }
  };

  const updateToken = async (localAccessToken) => {
    await setStoreData("access_token", localAccessToken);
  };

  const removeTokens = async () => {
    await removeStoreData("access_token");
    await removeStoreData("refresh_token");
  };

  const authenticateUser = async () => {
    const localAccessToken = await getStoreData("access_token");
    const localRefreshToken = await getStoreData("refresh_token");
    setAccessToken(localAccessToken);
    setRefreshToken(localRefreshToken);
    try {
      if (!profile?.id) {
        setSendGetCurUserReq(true);
      } else {
        dispatch(isLoaded());
      }
      setInterval(() => {
        setSendRepeatedRefreshTokenReq(true);
        setTimeout(() => {
          setSendRepeatedRefreshTokenReq(false);
        }, 1000);
      }, ACCESS_TOKEN_CHEANGE_TIME);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    retrieveToken();
  }, []);

  const { data: refreshData, error: refreshError } = useApiCalls({
    sendReq: sendrefreshTokenReq,
    setSendReq: setSendRefreshTokenReq,
    method: "POST",
    url: REFRESH_TOKEN_API_ROUTE,
    bodyData: { refresh: refreshToken },
    showLoading: true,
    closeLoading: false,
    showErrorMessage: false,
  });

  const { data: repeatedRefreshData, error: repeatedRefreshError } =
    useApiCalls({
      sendReq: sendRepeatedrefreshTokenReq,
      setSendReq: setSendRepeatedRefreshTokenReq,
      method: "POST",
      url: REFRESH_TOKEN_API_ROUTE,
      bodyData: { refresh: refreshToken },
      showLoading: false,
      showErrorMessage: false,
    });

  const { data: authenticatedData, error: authenticatedError } = useApiCalls({
    sendReq: sendAuthenticatedReq,
    setSendReq: setSendAuthenticatedReq,
    method: "GET",
    url: AUTHENTICATE_USER_API_ROUTE,
    showLoading: true,
    closeLoading: false,
    showErrorMessage: false,
  });

  const { data: profileData, error: profileError } = useApiCalls({
    sendReq: sendGetCurUserReq,
    setSendReq: setSendGetCurUserReq,
    method: "GET",
    url: MY_PROFILE_API_ROUTE,
    showLoading: true,
    showErrorMessage: false,
  });

  useEffect(() => {
    if (refreshToken) {
      setSendRefreshTokenReq(true);
    }
  }, [refreshToken]);

  useEffect(() => {
    if (refreshData) {
      updateToken(refreshData["access"]);
      setAccessToken(refreshData["access"]);
    }
  }, [refreshData]);

  useEffect(() => {
    if (repeatedRefreshData) {
      updateToken(repeatedRefreshData["access"]);
    }
  }, [repeatedRefreshData]);

  useEffect(() => {
    if (refreshError?.data) {
      removeTokens();
    }
  }, [refreshError]);

  useEffect(() => {
    if (accessToken && !isAuthenticated?.authenticated) {
      setSendAuthenticatedReq(true);
    }
  }, [accessToken]);

  useEffect(() => {
    if (authenticatedData) {
      if (authenticatedData?.Authenticated) {
        authenticated(dispatch);
      } else {
        notAuthenticated(dispatch);
        removeTokens();
      }
    }
  }, [authenticatedData]);

  useEffect(() => {
    if (authenticatedError?.data) {
      notAuthenticated(dispatch);
      removeTokens();
    }
  }, [authenticatedError]);

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      authenticateUser();
    }
  }, [isAuthenticated]);

  const registerForPushNotification = async () => {
    try {
      const res = await Notifications.requestPermissionsAsync();
      if (res?.granted) {
        const result = await Notifications.getExpoPushTokenAsync();
        if (result?.data) {
          setExpoNotificationToken(result.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (profileData) {
      getProfile(dispatch, profileData);
      registerForPushNotification();
    }
  }, [profileData]);

  const { data: expoNotificationData, error: expoNotificationError } =
    useApiCalls({
      sendReq: sendExpoNotificationTokenReq,
      setSendReq: setSendExpoNotificationTokenReq,
      method: "POST",
      bodyData: { token: expoNotificationToken },
      url: EXPO_NOTIFICATION_TOKEN_API_ROUTE,
      showLoading: false,
      closeLoading: false,
      showErrorMessage: false,
    });
  useEffect(() => {
    if (expoNotificationData) {
      console.log(expoNotificationData);
    }
  }, [expoNotificationData]);

  useEffect(() => {
    if (expoNotificationToken) {
      setSendExpoNotificationTokenReq(true);
    }
  }, [expoNotificationToken]);

  return (
    <>
      <SafeAreaView
        style={{ paddingTop: isAndroid() && StatusBar.currentHeight }}
      >
        {children}
      </SafeAreaView>
    </>
  );
};

export default BaseTemplate;
