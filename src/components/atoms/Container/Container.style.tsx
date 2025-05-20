import styled from "styled-components";

interface ContainerInterface {
  fullHeight?: boolean;
  fullCentralized?: boolean;
}

const Container = styled.div<ContainerInterface>`
  height: ${({ fullHeight }: ContainerInterface) =>
    !fullHeight ? "auto" : "100vh"};
  justify-content: ${({ fullCentralized }: ContainerInterface) =>
    !fullCentralized ? "initial" : "center"};
  align-items: ${({ fullCentralized }: ContainerInterface) =>
    !fullCentralized ? "initial" : "center"};
`;

export default Container;
