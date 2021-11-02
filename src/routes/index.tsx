import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SwiperScreen } from '../features/swiper';
import { TabBarIcon } from '../components/tab-bar-icon';
import { MotivationListScreen } from '../features/motivationList';
import { SettingsScreen } from '../features/settings';
import { ProfileScreen } from '../features/profile';
import { LoginScreen } from '../features/login';

const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      headerShown: false,
    })}
  >
    <Tab.Screen
      name="Swiper"
      component={SwiperScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon name="fire" focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="MotivationList"
      component={MotivationListScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon name="notebook" focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon name="settings" focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon name="ghost" focused={focused} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
