import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { USER_GROUPS } from "Constants/userGroups";
import { isLoading, isLoaded } from "Reducers/general/loading";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const AppAdminRoute = ({ children }) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [isAppAdmin, setIsAppAdmin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (isAuthenticated?.isChecked && !isAuthenticated?.authenticated) {
      setIsAppAdmin(false);
      setIsChecked(true);
      dispatch(isLoaded());
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (profile) {
      dispatch(isLoading());
      if (profile?.user?.groups) {
        if (profile.user.groups?.includes(USER_GROUPS.APP_ADMIN)) {
          setIsAppAdmin(true);
          setIsChecked(true);
        } else {
          setIsAppAdmin(false);
          setIsChecked(true);
        }
        dispatch(isLoaded());
      }
    }
  }, [profile]);

  useEffect(() => {
    if (isChecked && !isAppAdmin) {
      let currentTime = time;
      if (time > 0) {
        setTimeout(() => {
          currentTime -= 1;
          setTime(currentTime);
        }, 1000);
      }
      if (time === 0) {
        navigate.navigate("Home");
      }
    }
  }, [isChecked, isAppAdmin, time]);

  return (
    <>
      {isChecked && isAppAdmin ? children : ""}
      {isChecked && !isAppAdmin ? (
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

export default AppAdminRoute;
