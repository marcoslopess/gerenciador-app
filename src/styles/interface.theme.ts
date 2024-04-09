export interface ThemeProps {
  theme?: BaseTheme;
}

export interface BaseTheme {
  colors: BaseColors;
  spacing: BaseSpacing;
  fontSize: BaseFontSize;
  fontFamily: BaseFonts;
  size: BaseSize;
}

export interface BaseColors {
  title: string;
  primary: string;
  second: string;
  bgSecond: string;
  white: string;
  black: string;
  disabled: string;
  grey: string;
  greyLight: string;
  greyMedium: string;
  gray_font: string;
  greyCard: string;
  greyMiddleLight: string;
  greyMiddle: string;
  warning: string;
  danger: string;
  success: string;
  borderGreen: string;
  background: string;
  borderCard: string;
  textColor: string;
  skeletonStart: string;
  skeletonMiddle: string;
  skeletonEnd: string;
}

export interface BaseSpacing {
  tiny: number;
  xTiny: number;
  xxTiny: number;
  small: number;
  xSmall: number;
  medium: number;
  large: number;
  huge: number;
  xHuge: number;
}

export interface BaseSize {
  wp: (number: number) => number;
  hp: (number: number) => number;
  defaultWidth: string;
  defaultHeight: number;
}

export interface BaseFontSize {
  tiny: number;
  xTiny: number;
  xxTiny: number;
  small: number;
  xSmall: number;
  medium: number;
  medium_half: number;
  xMedium: number;
  xxMedium: number;
  large: number;
  xLarge: number;
  huge: number;
  xHuge: number;
}

export interface BaseFonts {
  light: string;
  regular: string;
  xRegular: string;
  semiBold: string;
  xSemiBold: string;
  bold: string;
  extraBold: string;
}
