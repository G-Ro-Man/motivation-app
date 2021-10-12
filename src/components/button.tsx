import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export const Button = ({ title = 'Button', customStyle = {} }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#208efb' : '#047CF4',
        },
        styles.button,
        customStyle,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
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
