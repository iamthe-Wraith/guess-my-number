import { FC, useCallback, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { Title } from '../../components/Title';
import { styles } from './styles';

interface IProps {
  onStart: (num: number) => void;
}

export const StartGameScreen: FC<IProps> = ({ onStart }) => {
  const [number, setNumber] = useState('');

  const onConfirmPress = useCallback(() => {
    const chosenNumber = parseInt(number);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Got it', style: 'destructive', onPress: onResetPress}]);
      return;
    }

    onStart(chosenNumber);
  }, [number]);

  const onChange = useCallback((text: string) => {
    setNumber(text);
  }, []);

  const onResetPress = useCallback(() => {
    setNumber('');
  }, []);

  return (
    <View style={ styles.container }>
      <Title>Guess My Number</Title>
      <View style={ styles.inputContainer }>
        <Text style={ styles.text }>Enter a Number:</Text>
        <TextInput
          style={ styles.input }
          maxLength={ 2 }
          keyboardType='number-pad'
          autoFocus
          autoCapitalize='none'
          autoCorrect={ false }
          onChangeText={ onChange }
          value={ number }
        />
        <View style={ styles.buttonContainer }>
          <PrimaryButton
            onPress={ onResetPress }
            style={ styles.button }
          >
            Reset
          </PrimaryButton>
          <PrimaryButton
            onPress={ onConfirmPress }
            style={ styles.button }
          >
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};