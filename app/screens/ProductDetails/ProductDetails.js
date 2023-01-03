import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import RoleBasedRoute from "Components/RoleBasedRoute";
import ScreenContainer from "Components/ScreenContainer";

import { USER_GROUPS } from "Constants/userGroups";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const ProductDetails = () => {
  const route = useRoute();

  const id = route.params.id;
  return (
    <>
      <ScreenContainer isScrollable={false}>
        <RoleBasedRoute hasAccessRole={USER_GROUPS.APP_ADMIN}>
          <AppText>ProductDetails {id}</AppText>
        </RoleBasedRoute>
      </ScreenContainer>
    </>
  );
};

export default ProductDetails;
