import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface Props {
  title: string;
  customStyle?: StyleProp<ViewStyle>;
}

interface Styles {
  button: ViewStyle;
  title: TextStyle;
}

export const Button = ({ title, customStyle = {} }: Props) => (
  <Pressable
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#208efb' : '#047CF4',
      },
      styles.button,
      customStyle,
    ]}
  >
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create<Styles>({
  title: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
