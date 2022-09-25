import { FC } from 'react';
import { View, Text } from 'react-native';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { Title } from '../../components/Title';
import { styles } from './styles';

interface IProps {
  won: boolean;
  rounds: number;
  userNumber: number;
  onRestart: () => void;
}

export const GameOverScreen: FC<IProps> = ({
  won,
  rounds,
  userNumber,
  onRestart,
}) => {
  const renderMessage = () => {
    if (won) {
      return (
        <Text style={ [styles.msg, styles.successMsg] }>
          Congrats! You won in <Text style={ styles.highlight }>{ rounds }</Text> rounds!
        </Text>
      );
    }

    return (
      <Text style={ [styles.msg, styles.failMsg] }>
        Sorry, you lost! The number was <Text style={ styles.highlight }>{ userNumber }</Text>.
      </Text>
    );
  };

  return (
    <View style={ styles.container }>
      <Title>{ won ? 'You Win!' : 'Game Over' }</Title>
      { renderMessage() }
      <View>
        <PrimaryButton
          onPress={ onRestart } 
        >
          Play Again
        </PrimaryButton>
      </View>
    </View>
  );
};