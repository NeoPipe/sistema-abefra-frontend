import { Col } from "react-grid-system";
import styled from "styled-components";
import {
  colors,
  sizes,
  zIndex,
  margins,
} from "../../../assets/styles/variables";

interface NavigationBarInterface {
  display?: string;
}

const NavigationBar = styled.div<NavigationBarInterface>`
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${colors.darkGreen};
  justify-content: center;
  width: ${sizes.size100Percent};
  height: ${sizes.size50};
  z-index: ${zIndex.firstLayer};
`;

interface ColWrapperInterface {
  $centralized?: boolean;
}

export const ColWrapper = styled(Col)<ColWrapperInterface>`
  display: flex;
  justify-content: ${({ $centralized }: ColWrapperInterface) =>
    !$centralized ? "" : "center"};
`;

export const IconWrapper = styled.div`
  width: ${sizes.size32};
  height: ${sizes.size32};
  border-radius: ${sizes.size16};

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc((${sizes.size50} - ${sizes.size32}) / 2);
  left: ${margins.marginSm};

  &:hover {
    cursor: pointer;
    background-color: ${colors.lightGrayOpacity};
  }
`;

export default NavigationBar;
