import styled from "styled-components";
import { colors, fontSizes, sizes } from "../../../assets/styles/variables";

interface InputInterface {
  $fullCentralized?: boolean;
}

const Input = styled.input<InputInterface>`
  border: none;

  width: ${sizes.size100Percent};
  padding: ${sizes.size8} ${sizes.size12};
  border-radius: ${sizes.size5};
  border: 1px solid ${colors.blackOpacity};
  font-size: ${fontSizes.fontSize18};
  transition: border-color 0.25s;
  color: ${colors.black};
  text-align: left;

  :focus {
    border-color: ${colors.white};
  }

  ::placeholder {
    color: ${colors.white};
  }

  :disabled {
    background-color: ${colors.white};
  }
`;

export default Input;
