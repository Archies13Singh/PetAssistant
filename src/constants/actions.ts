// src/data/homeActions.ts
import {
  Stethoscope,
  PawPrint,
  Calendar,
  MapPin,
} from 'lucide-react-native';

export const homeActions = [
  {
    title: 'Ask Vet AI',
    subtitle: 'Get expert advice instantly',
    icon: Stethoscope,
    rightType: 'button',
    rightLabel: 'Start Chat',
    route: 'Chat',
  },
  {
    title: 'Daily Diet Tip',
    subtitle: 'Avoid milk for adult dogs',
    icon: PawPrint,
    rightType: 'arrow',
    route: 'DietPlan',
  },
  {
    title: 'Upcoming Reminders',
    subtitle: 'Next: Deworming on June 3rd',
    icon: Calendar,
    rightType: 'arrow',
    route: 'Reminders',
  },
  {
    title: 'Nearby Vets',
    subtitle: 'View on Map',
    icon: MapPin,
    rightType: 'text',
    rightLabel: 'View on Map',
    route: 'VetMapScreen',
  },
];
