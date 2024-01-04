import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AnimationsList,
  DynamicScrollList,
  PhoneRingIndicator,
} from "../screens";
import { NAV_ROUTES } from "./NAV_ROUTES";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          component={AnimationsList}
          name={NAV_ROUTES.AnimationsList}
        />
        <Stack.Screen
          component={DynamicScrollList}
          name={NAV_ROUTES.DynamicScrollList}
        />
        <Stack.Screen
          component={PhoneRingIndicator}
          name={NAV_ROUTES.PhoneRingIndicator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const RootNavigation = Navigation;
