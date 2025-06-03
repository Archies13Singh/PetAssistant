import React from 'react';
import {View, StyleSheet, useColorScheme, ScrollView} from 'react-native';
import {DarkTheme, LightTheme} from '../../constants/themes';
import HomeActionCard from '../../components/ActionCards';
import {homeActions} from '../../constants/actions';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;
  const navigation = useNavigation();

  return (
    <View
      style={[styles.container, {backgroundColor: theme?.colors?.background}]}>
      <ScrollView contentContainerStyle={styles.content}>
        {homeActions.map((item, index) => (
          <Animatable.View
            key={index}
            animation="slideInLeft"
            duration={400}
            delay={index * 200} // delay each card
            useNativeDriver>
            <HomeActionCard
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              rightType={item.rightType}
              rightLabel={item.rightLabel}
              onPress={() => navigation.navigate(item.route)}
            />
          </Animatable.View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {
    paddingTop: 140, // space below logo
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
});

export default HomeScreen;
