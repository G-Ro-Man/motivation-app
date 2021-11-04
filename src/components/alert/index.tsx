import { Alert } from 'react-native';

export const showErrorAlert = (errorMessage: string) =>
  Alert.alert('Oops, error!', errorMessage, [{ text: 'OK' }]);
