import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

import Icon from "BaseComponents/Icon";

import Home from "Screens/Home";
import Products from "Screens/Products";

import { ProductNav } from "./stackRoutes";
import { LoginRegisterNav } from "./stackRoutes";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <>
      {isAuthenticated?.authenticated ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "dodgerblue",
              tabBarItemStyle: {
                padding: 4,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                title: "Home",
                tabBarIcon: ({ size, color }) => (
                  <Icon name="email" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="AddProduct"
              component={Products}
              options={{
                title: "Add Products",
                tabBarLabelStyle: { display: "none" },
                tabBarItemStyle: {
                  backgroundColor: "transparent",
                },
                tabBarIconStyle: {
                  width: 50,
                  backgroundColor: "tomato",
                  height: 100,
                  borderRadius: 50,
                  top: -10,
                },
                tabBarIcon: ({ size, color }) => (
                  <Icon name="email" size={40} color={"white"} />
                ),
              }}
            />
            <Tab.Screen
              name="ProductStack"
              component={ProductNav}
              options={{
                title: "Products",
                tabBarIcon: ({ size, color }) => (
                  <Icon name="email" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarItemStyle: {
                display: "none",
              },
              tabBarStyle: {
                display: "none",
              },
              tabBarLabelStyle: {
                display: "none",
              },
              tabBarIconStyle: {
                display: "none",
              },
              headerShown: false,
            }}
          >
            <Tab.Screen name="LoginStack" component={LoginRegisterNav} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Routes;
