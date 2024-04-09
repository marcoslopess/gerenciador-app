import { BaseColors } from './interface.theme';
import { spacing, fontSize, fontFamily, size } from './light.theme';
import { DefaultTheme } from 'styled-components/native';

const colors: BaseColors = {
  title: 'dark',
  primary: '#1351B4',
  second: '#1F3C53',
  bgSecond: '#142a3b',
  white: '#FFFFFF',
  black: '#000000',
  disabled: '#F0F2F5',
  grey: '#626466',
  greyLight: '#D9D9D9',
  greyMedium: '#C2CDD6',
  greyMiddle: '#979797',
  gray_font: '#F1F1F1',
  greyCard: '#626466',
  greyMiddleLight: '#CCCCCC',
  warning: '#FFCD07',
  danger: '#E52207',
  success: '#168821',
  borderGreen: '#009688',
  background: '#1F1F20',
  borderCard: '#4A4A4A',
  textColor: '#FFFFFF',
  skeletonStart: '#413f3f',
  skeletonMiddle: '#525050',
  skeletonEnd: '#252525'
};

export const darkTheme: DefaultTheme = {
  colors,
  spacing,
  fontSize,
  fontFamily,
  size
};
