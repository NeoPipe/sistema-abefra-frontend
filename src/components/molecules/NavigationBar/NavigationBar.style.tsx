import { Col } from "react-grid-system";
import styled from "styled-components";
import { colors, sizes, zIndex } from "../../../assets/styles/variables";

interface NavigationBarInterface {
  display?: string;
}

const NavigationBar = styled.div<NavigationBarInterface>`
  display: flex;
  position: fixed;
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

export default NavigationBar;
