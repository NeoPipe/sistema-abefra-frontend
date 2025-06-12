import styled from "styled-components";
import { colors, fontSizes, sizes } from "../../../assets/styles/variables";

interface ButtonInterface {
  $hideButton?: boolean;
}

const defaultConfig = styled.button<ButtonInterface>`
  border: none;

  background-color: ${colors.darkGreen};
  color: ${colors.white};

  width: ${sizes.size100Percent};
  height: ${sizes.size40};
  border-radius: ${sizes.size10};
  font-size: ${fontSizes.fontSize18};

  display: ${({ $hideButton }: ButtonInterface) =>
    !$hideButton ? "block" : "none"};

  cursor: pointer;
`;

export const MainButton = styled(defaultConfig)``;

export default MainButton;
