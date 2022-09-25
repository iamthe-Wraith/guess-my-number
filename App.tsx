/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StartGameScreen } from './screens/StartGameScreen';
import { theme } from './styles/theme';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';

interface IGameStats {
  won: boolean;
  rounds: number;
}

// Keep the splash screen visible while we fetch resources
// eslint-disable-next-line @typescript-eslint/no-floating-promises
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [userNumber, setUserNumber] = useState<number>();
  const [gameStats, setGameStats] = useState<IGameStats>();

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    prepare();
  }, []);

  const onGameStart = useCallback((num: number) => {
    setUserNumber(num);
  }, []);

  const onGameOver = useCallback((won: boolean, rounds: number) => {
    setGameStats({ won, rounds });
  }, []);

  const onRestart = useCallback(() => {
    setUserNumber(undefined);
    setGameStats(undefined);
  }, []);

  const renderScreen = () => {
    if (gameStats && userNumber) {
      return (
        <GameOverScreen
          won={ gameStats.won }
          rounds={ gameStats.rounds }
          userNumber={ userNumber }
          onRestart={ onRestart }
        />
      );
    }

    if (userNumber) {
      return (
        <GameScreen
          userNumber={ userNumber }
          onGameOver={ onGameOver }
        />
      );
    }

    return <StartGameScreen onStart={ onGameStart } />;
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <LinearGradient
      colors={ [theme.colors.primary[300], theme.colors.secondary[400]] }
      style={ styles.container }
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onLayout={ onLayoutRootView }
    >
      <ImageBackground
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        source={ require('./assets/images/background.png') }
        resizeMode='cover'
        style={ styles.container }
        imageStyle={ { opacity: 0.15 } }
      >
        <SafeAreaView style={ styles.container }>
          { renderScreen() }
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
