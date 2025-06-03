// src/screens/PetDetailsScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '../../constants/themes';

export default function PetDetailsScreen({ navigation }) {
  const [petName, setPetName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  const handleContinue = () => {
    // Save to Firebase in Step 3
    navigation.navigate('Home');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme?.colors?.background }]}>
      <Text style={[styles.heading,{color:theme?.colors?.text}]}>Tell us about your pet</Text>
      <TextInput
        placeholder="Pet Name"
        style={[styles.input, { borderColor: theme?.colors?.border, color: theme?.colors?.text }]}
        value={petName}
        onChangeText={setPetName}
      />
      <TextInput
        placeholder="Pet Age"
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        placeholder="Breed"
        style={styles.input}
        value={breed}
        onChangeText={setBreed}
      />
      <Button title="Continue" onPress={handleContinue} color="#2B4C3F" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2B4C3F',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
  },
});
