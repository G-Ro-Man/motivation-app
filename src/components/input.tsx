// TODO: find a solution for icon names
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export const Input = ({
  icon = 'arrow-right-circle',
  placeholder = '',
  secure = false,
}) => {
  return (
    <View style={styles.inputRow}>
      <SimpleLineIcons
        style={styles.icon}
        // @ts-ignore
        name={icon}
        size={24}
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    width: '100%',
    height: 50,
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
    marginVertical: 8,
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 50,
    paddingRight: 8,
  },
  icon: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
});
