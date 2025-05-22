import styled from "styled-components";
import { colors, sizes, fontSizes } from "../../../assets/styles/variables";

const defaultConfig = styled.button`
  border: none;

  background-color: ${colors.darkGreen};
  color: ${colors.white};

  height: ${sizes.size40};
  border-radius: ${sizes.size5};
  font-size: ${fontSizes.fontSize18};
`;

export const MainButton = styled(defaultConfig)``;

export default MainButton;
