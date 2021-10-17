import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from './src/features/login';
import { ProfileScreen } from './src/features/profile';
import { SettingsScreen } from './src/features/settings';
import { SwiperScreen } from './src/features/swiper';

import { TabBarIcon } from './src/components/tab-bar-icon';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name="login" focused={focused} />
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
          name="Swiper"
          component={SwiperScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name="fire" focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
