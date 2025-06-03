import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  useColorScheme,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Home, Cat, User} from 'lucide-react-native';
import {DarkTheme, LightTheme} from '../constants/themes';

const tabHeight = 70;


const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  const containerStyle = {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
    height: tabHeight,
    borderRadius: 35,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow, // dynamic shadow color
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.15,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  };

  const tabBarStyle = {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.tabColor,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: scheme === 'dark' ? theme.colors.border : 'none', // dynamic border color
  };

  return (
    <View style={containerStyle}>
      <View style={tabBarStyle}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel ?? route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const iconColor = isFocused
            ? theme.colors.primary
            : theme?.colors.neutral;
          const labelStyle = {
            fontSize: 12,
            marginTop: 2,
            color: iconColor,
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              onPress={onPress}
              style={styles.tabButton}
              activeOpacity={0.8}>
              {label === 'Home' ? (
                <Home color={iconColor} size={24} />
              ) : label === 'Chat' ? (
                <Cat color={iconColor} size={24} />
              ) : (
                <User color={iconColor} size={24} />
              )}
              <Text style={labelStyle}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
