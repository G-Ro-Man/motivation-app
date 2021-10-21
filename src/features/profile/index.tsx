import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import { Input } from '../../components/input';

import loginBackground from '../../../assets/login-background.jpg';

const userActivityData = [
  { title: 'Added', count: 6 },
  { title: 'Liked', count: 234 },
  { title: 'Saved', count: 34 },
];

export const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <Image
        source={loginBackground}
        resizeMode="cover"
        style={styles.coverImage}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.activities}>
        {userActivityData.map(({ title, count }) => (
          <View style={styles.activity}>
            <Text style={styles.activityTitle}>{title}</Text>
            <Text style={styles.activityCount}>{count}</Text>
          </View>
        ))}
      </View>
      <View style={styles.userInfo}>
        <Input icon="envelope" placeholder="Email" />
        <Input icon="phone" placeholder="Phone" secure />
        <Input icon="location-pin" placeholder="Address" secure />
      </View>
    </ScrollView>
  </SafeAreaView>
);

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
    marginBottom: 200,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: '#ffffffa7',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  userInfo: {
    width: '90%',
    alignItems: 'center',
    marginHorizontal: 20,
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
});
