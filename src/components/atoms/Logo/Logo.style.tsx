import styled from "styled-components";
import { sizes, colors } from "../../../assets/styles/variables";

interface LogoInterface {
  fullCentralized?: boolean;
}

const Logo = styled.img<LogoInterface>`
  width: ${sizes.size40Percent};
  border: 1px solid ${colors.black};
  border-radius: ${sizes.size50Percent};
`;

export default Logo;
