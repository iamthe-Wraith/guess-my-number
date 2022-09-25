import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../styles/theme';

const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderWidth: deviceWidth < 380 ? 2 : 4,
    borderColor: theme.colors.secondary[400],
    borderRadius: 10,
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 28 : 36,
    color: theme.colors.secondary[400],
  }
});