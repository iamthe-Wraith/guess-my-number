import { FC, ReactNode } from 'react';
import { View, Text, Pressable, ViewStyle, StyleProp } from 'react-native';
import { theme } from '../../../styles/theme';
import { styles } from './styles';

interface IProps {
  children: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const PrimaryButton: FC<IProps> = ({ children, onPress, style = {} }) => {
  return (
    <View style={ [styles.container, style] }>
      <Pressable
        onPress={ onPress }
        android_ripple={ { color: theme.colors.primary[400] } }
        style={ ({ pressed }) => pressed ? [styles.pressed, styles.innerContainer] : styles.innerContainer }
      >
        <Text style={ styles.text }>{ children }</Text>
      </Pressable>
    </View>
  );
};
