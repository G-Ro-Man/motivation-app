import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from './src/features/login';
import { ProfileScreen } from './src/features/profile';
import { SettingsScreen } from './src/features/settings';
import { SwiperScreen } from './src/features/swiper';
import { MotivationListScreen } from './src/features/motivationList';

import { TabBarIcon } from './src/components/tab-bar-icon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const Tab = createBottomTabNavigator();

const typeDefs = gql`
  type Query {
    page: Int!
  }
`;

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: false,
          read(existing) {
            return existing;
          },
          merge(existing = [], incoming) {
            return [...existing, ...incoming.results];
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: cache,
  typeDefs,
});

const HomeTabs = () => (
  <ApolloProvider client={client}>
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
  </ApolloProvider>
);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
