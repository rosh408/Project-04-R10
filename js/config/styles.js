import Platform from 'react-native';
export const typography = {
  fontMainLight: 'Montserrat-light',
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat',
    },
    android: {
      fontMain: 'Montserrat-Regular',
    },
  }),
};
