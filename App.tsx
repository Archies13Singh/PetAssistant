import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import {DarkTheme, LightTheme} from './src/constants/themes';

const navigationRef = React.createRef<any>();

function App(): React.JSX.Element {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <AppNavigator />
      <TouchableOpacity
        onPress={() => navigationRef.current?.navigate('Home')}
        style={[
          styles.logoWrapper,
          {
            borderColor: theme.colors.border,
            shadowColor: theme.colors.shadow,
          },
        ]}>
        <Image
          source={require('./src/assets/app_logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoWrapper: {
    position: 'absolute',
    top: 12,
    left: 12,
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 1,
    zIndex: 99,
    backgroundColor: 'transparent', // optional for better visibility
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: 70,
    width: 70,
    borderRadius: 30,
  },
});

export default App;
