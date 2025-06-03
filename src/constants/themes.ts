// src/constants/themes.ts

import { Theme as NavigationTheme } from '@react-navigation/native';

type ExtendedTheme = NavigationTheme & {
  colors: NavigationTheme['colors'] & {
    neutral: string;
    tabColor: string;
    shadow : string;
  };
};

export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    primary: '#95B8D1',
    background: '#F9FBFD',
    card: '#FFFFFF',
    text: '#1A1A1A',
    border: '#D6E4EF',
    notification: '#FF5A5F',
    neutral: '#A0A0A0',
    tabColor: '#1E1E2E',
    shadow: '#0000001A', // Added shadow color

  },
  fonts: {
    regular: { fontFamily: '', fontWeight: 'bold' },
    medium: { fontFamily: '', fontWeight: 'bold' },
    bold: { fontFamily: '', fontWeight: 'bold' },
    heavy: { fontFamily: '', fontWeight: 'bold' },
  },
};

export const DarkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    primary: '#95B8D1',
    background: '#0F172A',
    card: '#1E293B',
    text: '#FFFFFF',
    border: '#334155',
    notification: '#FF8A80',
    neutral: '#A0A0A0',
    tabColor: '#1E1E2E',
    shadow: '#FFFFFF',
  },
  fonts: {
    regular: { fontFamily: '', fontWeight: 'bold' },
    medium: { fontFamily: '', fontWeight: 'bold' },
    bold: { fontFamily: '', fontWeight: 'bold' },
    heavy: { fontFamily: '', fontWeight: 'bold' },
  },
};
