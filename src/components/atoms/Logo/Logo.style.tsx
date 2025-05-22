import styled from "styled-components";
import { sizes, colors, margins } from "../../../assets/styles/variables";

interface LogoInterface {
  fullCentralized?: boolean;
}

const Logo = styled.img<LogoInterface>`
  width: ${sizes.size200};
  height: ${sizes.size200};
  margin-bottom: ${margins.marginXs};

  border: 1px solid ${colors.black};
  border-radius: ${sizes.size100};
  object-fit: cover;
`;

export default Logo;
