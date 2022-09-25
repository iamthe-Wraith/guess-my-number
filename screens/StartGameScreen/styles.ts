import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  input: {
    width: 100,
    height: 50,
    marginVertical: 8,
    fontFamily: 'open-sans-bold',
    fontSize: 32,
    borderBottomColor: theme.colors.secondary[400],
    borderBottomWidth: 2,
    color: theme.colors.secondary[400],
    textAlign: 'center',
    textDecorationLine: 'none',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.primary[200],
    elevation: 4, // android only
    shadowColor: '#000', // ios only
    shadowOffset: { width: 0, height: 2 }, // ios only
    shadowRadius: 6, // ios only
    shadowOpacity: 0.25, // ios only
  },
  text: {
    fontFamily: 'open-sans',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  }
});