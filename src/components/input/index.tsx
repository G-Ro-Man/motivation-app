import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

interface InputProps {
  icon: React.ComponentProps<typeof SimpleLineIcons>['name'];
  inputRef?: React.RefObject<TextInput>;
  onChangeText: (value: string) => void;
  placeholder: string;
  rule: RegExp;
  secure?: boolean;
  style?: ViewStyle;
  value: string;
}

export const Input = ({
  icon,
  inputRef,
  onChangeText,
  placeholder,
  rule,
  secure = false,
  style,
  value,
}: InputProps) => {
  const [isError, setIsError] = useState(false);

  const _onChangeText = (value: string) => {
    onChangeText && onChangeText(value);
    setIsError(!rule.test(value));
  };

  return (
    <View style={[styles.inputRow, isError && styles.errorStyle, style]}>
      <SimpleLineIcons
        color="black"
        name={icon}
        size={24}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        ref={inputRef}
        secureTextEntry={secure}
        style={styles.input}
        value={value}
        onChangeText={_onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    backgroundColor: '#fff',
    borderRadius: 16,
    height: 50,
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  errorStyle: {
    borderColor: '#f77f7f',
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
