import * as SecureStore from "expo-secure-store";

import { authenticated } from "Services/auth";
import { addAlertItem } from "Utils/notifications";

// set Store Data
export const setStoreData = async (key, value) => {
  try {
    return await SecureStore.setItemAsync(key, value);
  } catch (err) {
    console.log(err);
  }
};

// Remove Store Data
export const removeStoreData = async (key) => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (err) {
    console.log(err);
  }
};
// get Store Data
export const getStoreData = async (key) => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (err) {
    console.log(err);
  }
};

// autheticate user by pass data to cookie and localstorage
export const authenticate = async (data, next) => {
  try {
    await setStoreData("token", data.token);
    return await setStoreData("user", data.user);
    next();
  } catch (err) {
    console.log(err);
  }
};

export const isAuth = async () => {
  try {
    const cookieChecked = await getStoreData("token");
    if (cookieChecked) {
      const user = await getStoreData("user");
      if (user) {
        return JSON.parse(user);
      } else {
        return false;
      }
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const handleResponse = (response) => {
  if (response.status === 401) {
    signout(() => {
      Router.push({
        pathname: "/signin",
        query: {
          message: "Your session is expired. Please signin",
        },
      });
    });
  }
};

export const loginUser = async (access_token, refresh_token, dispatch) => {
  await setStoreData("access_token", access_token);
  await setStoreData("refresh_token", refresh_token);
  authenticated(dispatch);
  addAlertItem(dispatch, "You have successfully logged in.", "success");
};
