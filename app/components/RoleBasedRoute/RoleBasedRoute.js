import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { USER_GROUPS } from "Constants/userGroups";

import { styles, fontStyleFunc } from "Styles";

import AllowedGroupRoute from "./subs/AllowedGroupRoute";
import { localStyles } from "./localStyles";

const RoleBasedRoute = ({ hasAccessRole, children }) => {
  return (
    <>
      <>
        {hasAccessRole.includes("Public") ? (
          <>{children}</>
        ) : (
          <AllowedGroupRoute
            allowedGroup={
              hasAppAdminAccess
                ? [USER_GROUPS.APP_ADMIN, ...hasAccessRole]
                : hasAccessRole
            }
          >
            {children}
          </AllowedGroupRoute>
        )}
      </>
    </>
  );
};

export default RoleBasedRoute;
