import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import CustomTabBar from '../components/CustomTabBar';
import AiChat from '../screens/AIChat/AiChatScreen';
import DietPlan from '../screens/DietPlan/DietPlanScreen';
import Reminders from '../screens/Reminders/ReminderScreen';
import LogInScreen from '../screens/LoginIn/LoginScreen';
import PetDetailsScreen from '../screens/PetDetail/PetDetailScreen';

const Tab = createBottomTabNavigator();

// List of screens you want to HIDE from the tab bar
const hiddenRoutes = ['DietPlan', 'Reminders',''];

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => {
        const filteredState = {
          ...props.state,
          routes: props.state.routes.filter(
            route => !hiddenRoutes.includes(route.name)
          ),
          index: Math.max(
            0,
            props.state.routes.findIndex(
              route => route.name === props.state.routes[props.state.index].name
            )
          ),
        };
        return <CustomTabBar {...props} state={filteredState} />;
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={AiChat} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

      {/* Hidden Screens (no tab icon) */}
      <Tab.Screen
        name="DietPlan"
        component={DietPlan}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="Reminders"
        component={Reminders}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="LoginScreen"
        component={LogInScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="PetDetailsScreen"
        component={PetDetailsScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
