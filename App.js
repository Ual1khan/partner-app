import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { context } from "@reatom/react";
import { FontAwesome5 } from "@expo/vector-icons";
import "react-native-gesture-handler";

import {
  ProfileScreen,
  StatisticsScreen,
  VisitsScreen,
  ScheduleScreen,
} from "./screens";
import { store } from "./store";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <context.Provider value={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Profile"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Profile") {
                iconName = "users-cog";
              } else if (route.name === "Visits") {
                iconName = "users";
              } else if (route.name === "Stats") {
                iconName = "chart-pie";
              } else if (route.name === "Schedule") {
                iconName = "calendar";
              }

              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Visits" component={VisitsScreen} />
          <Tab.Screen name="Schedule" component={ScheduleScreen} />
          <Tab.Screen name="Stats" component={StatisticsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </context.Provider>
  );
}
