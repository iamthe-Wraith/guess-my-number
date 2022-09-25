import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, Alert, FlatList, ListRenderItem } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { GuessContaier } from '../../components/game/GuessContainer';
import { Title } from '../../components/Title';
import { Config } from '../../config';
import { generateRandomNumber } from '../../utils/number';
import { styles } from './styles';

enum Hint {
  LOWER = 'lower',
  HIGHER = 'higher',
}

interface IBoundaries {
  upper: number;
  lower: number;
}

interface IProps {
  userNumber: number;
  onGameOver: (won: boolean, rounds: number) => void;
}

const defaultBoundaries: IBoundaries = {
  upper: 100,
  lower: 1,
};

export const GameScreen: FC<IProps> = ({ userNumber, onGameOver }) => {
  const boundaries = useRef<IBoundaries>({...defaultBoundaries});
  const [currentGuess, setCurrentGuess] = useState<number>(generateRandomNumber(boundaries.current.lower, boundaries.current.upper, userNumber));
  const [guessRounds, setGuessRounds] = useState([currentGuess]);

  useEffect(() => {
    boundaries.current = {...defaultBoundaries};
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber || guessRounds.length >= Config.MAX_GUESSES) {
      onGameOver(currentGuess === userNumber, guessRounds.length);
    }
  }, [currentGuess, guessRounds]);

  const onHintPress = useCallback((hint: Hint) => () => {
    if (guessRounds.length >= Config.MAX_GUESSES) return;

    if (hint === Hint.LOWER) {
      if (currentGuess < userNumber) {
        Alert.alert('Don\'t lie!', 'You know your number is not lower...', [{ text: 'Sorry!', style: 'cancel' }]);
        return;
      }

      boundaries.current.upper = currentGuess;
    } else {
      if (currentGuess > userNumber) {
        Alert.alert('Don\'t lie!', 'You know you number is not higher...', [{ text: 'Sorry!', style: 'cancel' }]);
        return;
      }

      boundaries.current.lower = currentGuess + 1;
    }

    const newGuess = generateRandomNumber(boundaries.current.lower, boundaries.current.upper);
    setCurrentGuess(newGuess);
    setGuessRounds(prev => [newGuess, ...prev]);
  }, [boundaries.current, currentGuess, guessRounds, userNumber]);

  const renderRound: ListRenderItem<number> = ({ index, item }) => {
    return (
      <View style={ styles.round }>
        <Text style={ styles.roundText }>#{ index + 1 }</Text>
        <Text style={ styles.roundText }>Opponent's Guess: { item }</Text>
      </View>
    );
  };

  return (
    <View style={ styles.container }>
      <Title>Opponent's Guess</Title>
      <GuessContaier guess={ currentGuess } />
      <View>
        <Text style={ styles.text }>Higher or Lower?</Text>
        <View style={ styles.buttonsContainer }>
          <PrimaryButton
            onPress={ onHintPress(Hint.LOWER) }
            style={ styles.button }
          >
            <Ionicons name='md-remove' size={ 24 } color='white' />
          </PrimaryButton>
          <PrimaryButton
            onPress={ onHintPress(Hint.HIGHER) }
            style={ styles.button }
          >
            <Ionicons name='md-add' size={ 24 } color='white' />
          </PrimaryButton>
        </View>
      </View>
      <FlatList
        style={ styles.rounds }
        data={ guessRounds }
        keyExtractor={ item => item.toString() }
        renderItem={ renderRound }
      />
    </View>
  );
};