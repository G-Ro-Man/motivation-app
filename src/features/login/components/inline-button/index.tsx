import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

type InlineButtonProps = { title: string; onPress?: PressableProps['onPress'] };

export const InlineButton = ({ title, onPress }: InlineButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#d2e6ff' : '#ffffff',
        },
        styles.button,
      ]}
      onPress={onPress}
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
