import {getPaletteSync} from '@assembless/react-native-material-you'

const palette = getPaletteSync();

export const DarkThemeApp = {
  dark: true,
  colors: {
    primary: palette ? palette.system_accent1[8] : 'teal',
    background: 'black',
    card: 'rgb(255, 255, 255)',
    text: 'teal',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const DefaultThemeApp = {
  dark: false,
  colors: {
    primary: palette ? palette.system_accent1[8] : 'teal',
    background: palette ? palette.system_accent3[1] : '#E7EBDA',
    card: 'rgb(255, 255, 255)',
    text: 'black',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};