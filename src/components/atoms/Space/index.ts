import styled from "styled-components/native";

type PropsSize = {
  size?: string; //"tiny" | "xTiny" | "xSmall" | "small" | "medium" | "large";
  kind?: "left" | "right" | "top" | "bottom";
};

export const Space = styled.View<PropsSize>`
  ${({ kind, size }) => {
    const paddingKey = kind ? `-${kind}` : "";

    return `padding${paddingKey}: ${size}px;`;
  }}
`;
