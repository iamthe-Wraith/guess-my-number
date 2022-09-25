import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondary[400],
  },
  text: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  }
});