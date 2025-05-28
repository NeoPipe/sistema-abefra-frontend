import styled, { css } from "styled-components";
import { colors } from "../../../assets/styles/variables";

interface TypographyInterface {
  $color?: string;
  $fullCentralized?: boolean;
  $marginBottom?: string;
}

const Typography = styled.h1<TypographyInterface>`
  color: ${({ $color }: TypographyInterface) =>
    !$color ? `${colors.black}` : $color};
  ${({ $fullCentralized }: TypographyInterface) =>
    $fullCentralized &&
    css`
      text-align: center;
    `};
  margin-bottom: ${({ $marginBottom }: TypographyInterface) =>
    !$marginBottom ? "none" : $marginBottom};
`;

export default Typography;
