import { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
  guess: number;
}

export const GuessContaier: FC<IProps> = ({ guess }) => (
  <View style={ styles.container }>
    <Text style={ styles.text }>{ guess }</Text>
  </View>
);