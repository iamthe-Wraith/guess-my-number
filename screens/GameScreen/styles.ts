import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  round: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 4,
    padding: 8,
    borderWidth: 2,
    borderColor: theme.colors.primary[300],
    borderRadius: 6,
    backgroundColor: theme.colors.secondary[400],
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  rounds: {
    flex: 1,
  },
  roundText: {
    fontSize: 18,
  },
  screen: {
    flex: 1,
  },
  text: {
    marginBottom: 12,
    color: '#fff',
    textAlign: 'center',
  }
});