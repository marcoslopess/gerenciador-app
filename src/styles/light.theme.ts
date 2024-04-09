import {
  BaseColors,
  BaseSpacing,
  BaseSize,
  BaseFonts,
  BaseFontSize
} from './interface.theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { DefaultTheme } from 'styled-components/native';

const colors: BaseColors = {
  title: 'light',
  primary: '#1351B4',
  second: '#1F3C53',
  bgSecond: '#142a3b',
  white: '#FFFFFF',
  black: '#000000',
  disabled: '#F0F2F5',
  grey: '#77738C',
  greyLight: '#D9D9D9',
  greyMedium: '#C2CDD6',
  gray_font: '#626466',
  greyCard: '#E5E5E5',
  greyMiddleLight: '#CCCCCC',
  greyMiddle: '#979797',
  warning: '#FFCD07',
  danger: '#E52207',
  success: '#168821',
  borderGreen: '#009688',
  background: '#F8F8F8',
  borderCard: '#D8D8D8',
  textColor: '#000000',
  skeletonStart: '#ebebeb',
  skeletonMiddle: '#c5c5c5',
  skeletonEnd: '#ebebeb'
};

export const spacing: BaseSpacing = {
  tiny: wp(1),
  xTiny: wp(1.5),
  xxTiny: wp(1.8),
  small: wp(2),
  xSmall: wp(3),
  medium: wp(4),
  large: wp(6),
  huge: wp(16),
  xHuge: wp(24)
};

export const fontSize: BaseFontSize = {
  tiny: 10,
  xTiny: 12,
  xxTiny: 14,
  small: 16.8,
  xSmall: 19,
  medium: 20.16,
  medium_half: 23.18,
  xMedium: 24,
  xxMedium: 26,
  large: 28,
  xLarge: 30,
  huge: 40,
  xHuge: 50
};

export const size: BaseSize = {
  wp: (number: number) => wp(number),
  hp: (number: number) => hp(number),
  defaultHeight: hp(6),
  defaultWidth: '100%'
};

export const fontFamily: BaseFonts = {
  light: 'Rawline-300',
  regular: 'Rawline-400',
  xRegular: 'Rawline-500',
  semiBold: 'Rawline-600',
  xSemiBold: 'Rawline-700',
  bold: 'Rawline-800',
  extraBold: 'Rawline-900'
};

export const lightTheme: DefaultTheme = {
  colors,
  spacing,
  fontSize,
  fontFamily,
  size
};
