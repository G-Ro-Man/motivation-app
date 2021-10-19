import * as React from 'react';
import { Button, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const SettingsScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};
