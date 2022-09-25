import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  failMsg: {
    color: theme.colors.secondary[400],
  },
  highlight: {
    color: theme.colors.secondary[400],
  },
  msg: {
    marginVertical: 24,
    fontFamily: 'open-sans',
    fontSize: 18,
    textAlign: 'center',
  },
  successMsg: {
    color: '#fff',
  }
});