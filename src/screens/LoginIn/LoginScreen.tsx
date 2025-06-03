import React from 'react';
import { View, Text, StyleSheet, useColorScheme, Image, TouchableOpacity } from 'react-native';
import { DarkTheme, LightTheme } from '../../constants/themes';
import { LogIn, Phone } from 'lucide-react-native';

const LogInScreen = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  const handleGoogleSignIn = () => {
    // to be implemented
  };

  const handlePhoneLogin = () => {
    // to be implemented
  };
  return (
    <View style={[styles.container, { backgroundColor: theme?.colors?.background }]}>
      <View style={styles.container}>
      <Image source={require('../../assets/app_logo.png')} style={styles.logo} />
      <Text style={[styles.title,{color:theme?.colors?.text}]}>Pet Assistant</Text>
      <Text style={[styles.loginText,{color:theme?.colors?.text}]}>Login</Text>

      <TouchableOpacity style={[styles.button,{backgroundColor:theme?.colors?.border}]} onPress={handleGoogleSignIn}>
        <LogIn size={24} color={theme?.colors?.primary} />
        <Text style={[styles.buttonText,{color:theme?.colors?.text}]}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button,{backgroundColor:theme?.colors?.border}]}>
        <Phone size={24} color={theme?.colors?.primary} />
        <Text style={[styles.buttonText,{color:theme?.colors?.text}]}>Continue with phone</Text>
      </TouchableOpacity>

      <Text style={[styles.terms,{color:theme?.colors?.text}]}>
        By signing in, you agree to our Terms of Service and Privacy Policy
      </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  loginText: {
    fontSize: 20,
    marginVertical: 12,
  },
  button: {
    flexDirection: 'row',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  terms: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default LogInScreen;
