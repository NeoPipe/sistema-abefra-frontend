import styled from "styled-components";

interface ContainerInterface {
  fullHeight?: boolean;
  fullWidth?: boolean;
  fullCentralized?: boolean;
  displayFlex?: boolean;
  directionColumn?: boolean;
  backgroundColor?: string;
}

const Container = styled.div<ContainerInterface>`
  height: ${({ fullHeight }: ContainerInterface) =>
    !fullHeight ? "auto" : "100vh"};
  width: ${({ fullWidth }: ContainerInterface) =>
    !fullWidth ? "auto" : "100vw"};
  justify-content: ${({ fullCentralized }: ContainerInterface) =>
    !fullCentralized ? "initial" : "center"};
  align-items: ${({ fullCentralized }: ContainerInterface) =>
    !fullCentralized ? "initial" : "center"};

  display: ${({ displayFlex }: ContainerInterface) =>
    !displayFlex ? "block" : "flex"};
  flex-direction: ${({ directionColumn }: ContainerInterface) =>
    !directionColumn ? "row" : "column"};
`;

export default Container;
