import { ThemeProps } from "../../../styles/index";
import styled from "styled-components/native";

export interface PropsText {
  theme?: any;
  size?:
    | "tiny"
    | "xTiny"
    | "xxTiny"
    | "small"
    | "xSmall"
    | "medium"
    | "medium_half"
    | "xMedium"
    | "large"
    | "huge"
    | "xHuge";
  color?: string;
  weight?: string | number;
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  pt?: number;
  pb?: number;
  textAlign?: string;
  textTransform?: string;
  fontFamily?: string;
  lineHeight?: number;
  textDecorationLine?: string;
  textDecorationColor?: string;
  width?: string;
}

const BaseText = styled.Text<PropsText & ThemeProps>`
  margin-top: ${(props) => props.theme.size[props.mt || 0]}px;
  margin-bottom: ${(props) => props.theme.size[props.mb || 0]}px;
  margin-left: ${(props) => props.theme.size[props.ml || 0]}px;
  margin-right: ${(props) => props.theme.size[props.mr || 0]}px;
  padding-top: ${(props) => props.theme.size[props.pt || 0]}px;
  padding-bottom: ${(props) => props.theme.size[props.pb || 0]}px;
  text-align: ${(props) => props.textAlign || "left"};
  text-transform: ${(props) => props.textTransform || "none"};
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight}px`};
  font-family: ${(props) =>
    props.fontFamily ? props.theme.fontFamily[props.fontFamily] : props.theme.fontFamily.regular};
  color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.textColor)};
  text-decoration: ${(props) => props.textDecorationLine || "none"};
  ${(props) =>
    props.textDecorationColor &&
    `text-decoration-color: ${props.color ? props.theme.colors[props.color] : props.theme.colors.textColor};}`};
  ${(props) => props.width && `width: ${props.width}`};
`;

export const TitleText = styled(BaseText)<ThemeProps>`
  font-size: ${(props) => props.theme.fontSize.huge}px;
  font-weight: 800;
  color: ${(props: any) => (props.color ? props.theme.colors[props.color] : props.theme.colors.textColor)};
`;

export const SubTitleText = styled(BaseText)<ThemeProps>`
  font-size: ${({ theme }) => theme.fontSize.xSmall}px;
  font-weight: ${(props) => props.weight || 600};
  color: ${(props: any) => (props.color ? props.theme.colors[props.color] : props.theme.colors.textColor)};
`;

export const LabelText = styled(BaseText)<ThemeProps>`
  font-size: ${(props) => props.theme.fontSize[props.size || "small"]}px;
  font-weight: ${(props) => props.weight || 500};
  color: ${(props: any) => (props.color ? props.theme.colors[props.color] : props.theme.colors.textColor)};
`;

export const Text = styled(BaseText)<ThemeProps>`
  font-size: ${(props) => props.theme.fontSize[props.size || "tiny"]}px;
  font-weight: ${(props) => props.weight || 500};
  color: ${(props: any) => (props.color ? props.theme.colors[props.color] : props.theme.colors.textColor)};
  font-family: ${(props: any) =>
    props.fontFamily ? props.theme.fontFamily[props.fontFamily] : props.theme.fontFamily.regular};
`;
