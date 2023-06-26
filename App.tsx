import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WorkoutsScreen from "./screens/WorkoutsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MealsScreen from "./screens/MealsScreen";
import StatsScreen from "./screens/StatsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={WorkoutsScreen} />
        <Tab.Screen name="Workouts" component={SettingsScreen} />
        <Tab.Screen name="Meals" component={MealsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
