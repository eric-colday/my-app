import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "./src/screens/Home";
import RestaurantDetail from "./src/screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./src/screens/OrderCompleted";
import OnboardingScreen from "./src/screens/OnboardingScreen";

const store = configureStore();

const RootNavigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = "Onboarding";
  } else {
    routeName = "Home";
  }

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routeName} screenOptions={screenOptions}>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNavigation;
