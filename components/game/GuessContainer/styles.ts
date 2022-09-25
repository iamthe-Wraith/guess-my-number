import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
    padding: 24,
    borderWidth: 4,
    borderColor: theme.colors.secondary[400],
    borderRadius: 10,
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 36,
    color: theme.colors.secondary[400],
  }
});