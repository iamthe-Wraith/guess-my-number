import { FC, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
  children: ReactNode;
}

export const Title: FC<IProps> = ({ children }) => (
  <View style={ styles.container }>
    <Text style={ styles.text }>{ children }</Text>
  </View>
);