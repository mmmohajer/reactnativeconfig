import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "Screens/Login";
import Register from "Screens/Register";

const Stack = createNativeStackNavigator();

export const LoginRegisterNavigations = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: "Login",
      }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={({ route }) => ({
        title: "Register",
      })}
    />
  </Stack.Navigator>
);
