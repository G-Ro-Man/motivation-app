import React, { useEffect, useState } from 'react';
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import { Input } from '../../components/input';

import loginBackground from '../../../assets/login-background.jpg';
import defaultUserImage from '../../../assets/default-user-image.jpg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const userActivityData = [
  { title: 'Added', count: 6 },
  { title: 'Liked', count: 234 },
  { title: 'Saved', count: 34 },
];

const emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRule =
  /^\+?([0-9]{2})?\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const textRule = /^$|^[\w ,.'-]+$/;

export const ProfileScreen = () => {
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let permission = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (permission.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        limited: true,
        accessPrivileges: 'limited',
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } else {
      alert('Sorry, we need library permissions to make this work!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Image
          source={loginBackground}
          resizeMode="cover"
          style={styles.coverImage}
        />
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Pressable onPress={pickImage} style={styles.avatarButton}>
            <Image
              source={image ? { uri: image } : defaultUserImage}
              style={styles.avatar}
            />
          </Pressable>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Roman</Text>
          <Text style={styles.userProfession}>Front End Developer</Text>
        </View>
        <View style={styles.activities}>
          {userActivityData.map(({ title, count }) => (
            <View style={styles.activity} key={title}>
              <Text style={styles.activityTitle}>{title}</Text>
              <Text style={styles.activityCount}>{count}</Text>
            </View>
          ))}
        </View>
        <View style={styles.userInfo}>
          <Input
            icon="envelope"
            placeholder="Email"
            rule={emailRule}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            icon="phone"
            placeholder="Phone"
            rule={phoneRule}
            value={phone}
            onChangeText={setPhone}
          />
          <Input
            icon="location-pin"
            placeholder="Address"
            rule={textRule}
            value={address}
            onChangeText={setAddress}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  coverImage: {
    flex: 1,
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 37,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: '#ffffffa7',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  userInfo: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  userProfession: {
    fontSize: 20,
  },
  activities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  activity: {
    width: '30%',
    borderRadius: 20,
    backgroundColor: '#ffffffa7',
    padding: 20,
    alignItems: 'center',
  },
  activityTitle: {
    fontSize: 18,
  },
  activityCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarButton: {
    width: 210,
    height: 210,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 105,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#acacac',
    backgroundColor: '#ffffffa7',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#acacac',
  },
});
