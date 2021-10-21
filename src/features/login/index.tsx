import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button } from './components/button';
import { InlineButton } from './components/inline-button';
import { Input } from '../../components/input';

import loginBackground from '../../../assets/login-background.jpg';

type RootStackParamList = {
  Swiper: undefined;
  Profile: undefined;
  Settings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export const LoginScreen = ({ navigation }: Props) => (
  <SafeAreaView style={styles.container}>
    <Image
      source={loginBackground}
      resizeMode="cover"
      style={styles.background}
    />
    <Text style={styles.title}>Welcome</Text>
    <View style={styles.login}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
        <InlineButton title="SIGN UP" />
      </View>
      <Input icon="user" placeholder="Login" />
      <Input icon="lock" placeholder="Password" secure />
      <InlineButton title="Forget Password?" />
      <InlineButton title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Login" customStyle={styles.button} />
    </View>
    <View style={styles.footer}>
      <Text>Login with:</Text>
      <SimpleLineIcons
        style={styles.social}
        name="social-facebook"
        size={24}
        color="black"
      />
      <SimpleLineIcons
        style={styles.social}
        name="social-google"
        size={24}
        color="black"
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: '#ffffffa7',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '50%',
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  login: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  headerTitle: {
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    bottom: -20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  social: {
    marginHorizontal: 10,
  },
});
