import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    margin: 4,
    borderRadius: 999,
    overflow: 'hidden',
  },
  innerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.primary[500],
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  }
});