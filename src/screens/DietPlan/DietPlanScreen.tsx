import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '../../constants/themes';

const DietPlan = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;
  return (
    <View style={[styles.container, { backgroundColor: theme?.colors?.background }]}>
      <Text style={{color:theme?.colors?.text}}>Welcome to DietPlan!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default DietPlan;
