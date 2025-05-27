import type { JSX } from "react";
import Container from "./Container.style";

interface ContainerComponentInterface
  extends React.ComponentPropsWithRef<typeof Container> {
  children?: JSX.Element | JSX.Element[];
  fullCentralized?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
  displayFlex?: boolean;
  directionColumn?: boolean;
  gap?: string;
  fluid?: boolean;
}

const ContainerComponent = ({
  children,
  fullCentralized,
  fullHeight,
  fullWidth,
  displayFlex,
  directionColumn,
  fluid,
}: ContainerComponentInterface) => {
  return (
    <Container
      fullCentralized={fullCentralized}
      fullHeight={fullHeight}
      fullWidth={fullWidth}
      displayFlex={displayFlex}
      directionColumn={directionColumn}
      fluid={fluid}
    >
      {children}
    </Container>
  );
};

export default ContainerComponent;
