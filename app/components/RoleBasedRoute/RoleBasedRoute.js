import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { USER_GROUPS } from "Constants/userGroups";

import { styles, fontStyleFunc } from "Styles";

import AppAdminRoute from "./subs/AppAdminRoute";
import SubscriberRoute from "./subs/SubscriberRoute";
import { localStyles } from "./localStyles";

const RoleBasedRoute = ({ hasAccessRole, children }) => {
  return (
    <>
      <>
        {hasAccessRole === USER_GROUPS.APP_ADMIN && (
          <AppAdminRoute>{children}</AppAdminRoute>
        )}
        {hasAccessRole === USER_GROUPS.SUBSCRIBER && (
          <SubscriberRoute>{children}</SubscriberRoute>
        )}
      </>
    </>
  );
};

export default RoleBasedRoute;
