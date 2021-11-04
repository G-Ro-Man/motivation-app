import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ItemProps {
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
}

export const ListItem = ({ picture, name }: ItemProps) => (
  <View style={styles.item}>
    <Image style={styles.image} source={{ uri: picture.medium }} />
    <Text style={styles.title}>
      {name.first} {name.last}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
  },
  title: {
    fontSize: 22,
    marginLeft: 25,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
