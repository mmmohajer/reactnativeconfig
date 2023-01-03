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

const SubscriberRoute = ({ children }) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [isSubscriber, setIsSubscriber] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (isAuthenticated?.isChecked && !isAuthenticated?.authenticated) {
      setIsSubscriber(false);
      setIsChecked(true);
      dispatch(isLoaded());
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (profile) {
      dispatch(isLoading());
      if (profile?.user?.groups) {
        if (profile.user.groups?.includes(USER_GROUPS.SUBSCRIBER)) {
          setIsSubscriber(true);
          setIsChecked(true);
        } else {
          setIsSubscriber(false);
          setIsChecked(true);
        }
        dispatch(isLoaded());
      }
      setTimeout(() => {
        setIsChecked(true);
        dispatch(isLoaded());
      }, 2000);
    }
  }, [profile]);

  useEffect(() => {
    if (isChecked && !isSubscriber) {
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
  }, [isChecked, isSubscriber, time]);

  return (
    <>
      {isChecked && isSubscriber ? children : ""}
      {isChecked && !isSubscriber ? (
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

export default SubscriberRoute;
