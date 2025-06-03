// src/components/HomeActionCard.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  useColorScheme,
} from 'react-native';
import {LucideIcon, ChevronRight} from 'lucide-react-native';
import { DarkTheme } from '@react-navigation/native';
import { LightTheme } from '../constants/themes';

type RightType = 'arrow' | 'button' | 'text' | 'none';

type Props = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  rightType?: RightType;
  rightLabel?: string;
  onPress?: (e: GestureResponderEvent) => void;
};

const HomeActionCard: React.FC<Props> = ({
  icon: Icon,
  title,
  subtitle,
  rightType = 'none',
  rightLabel,
  onPress,
}) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;
  const renderRightElement = () => {
    switch (rightType) {
      case 'arrow':
        return <ChevronRight color="#333" />;
      case 'button':
        return (
          <View style={styles.button}>
            <Text style={styles.buttonText}>{rightLabel}</Text>
          </View>
        );
      case 'text':
        return <Text style={styles.rightText}>{rightLabel}</Text>;
      default:
        return null;
    }
  };

  return (
    <View  style={[styles.card,{borderWidth: scheme === 'dark' ? 0 : 1, borderColor: theme.colors.border}]}>
      <View style={styles.left}>
        <View style={styles.iconWrapper}>
          <Icon size={20} color="#1A6D57" />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={styles.right}>{renderRightElement()}</View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeActionCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFFBEF',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconWrapper: {
    height: 36,
    width: 36,
    backgroundColor: '#FAEBCB',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textWrapper: {
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  subtitle: {
    fontSize: 13,
    color: '#4A4A4A',
    marginTop: 2,
  },
  right: {
    marginLeft: 8,
  },
  rightText: {
    color: '#1A6D57',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#1A6D57',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});
