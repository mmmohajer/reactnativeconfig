import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";
import ScreenContainer from "Components/ScreenContainer";
import AuthRoute from "Components/AuthRoute";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Products = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScreenContainer isScrollable={false}>
        <AuthRoute>
          <AppText>Products</AppText>
          <Button
            btnText="See Details"
            onPress={() => navigation.navigate("ProductDetails", { id: 1 })}
          />
        </AuthRoute>
      </ScreenContainer>
    </>
  );
};

export default Products;
