import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export const InlineButton = ({ title = 'Unnamed' }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#d2e6ff' : '#ffffff',
        },
        styles.button,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#999999',
  },
});
