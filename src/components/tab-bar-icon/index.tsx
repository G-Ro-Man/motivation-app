import * as React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

interface Props {
  focused: boolean;
  name: 'login' | 'ghost' | 'settings' | 'fire';
}

export const TabBarIcon = ({ focused, name }: Props) => {
  return (
    <SimpleLineIcons
      name={name}
      size={30}
      color={focused ? '#047CF4' : '#424242'}
    />
  );
};
