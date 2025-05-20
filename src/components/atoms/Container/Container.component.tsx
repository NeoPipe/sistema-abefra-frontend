import type { JSX } from "react";
import Container from "./Container.style";

interface ContainerComponentInterface
  extends React.ComponentPropsWithRef<typeof Container> {
  children?: JSX.Element | JSX.Element[];
  fullCentralized?: boolean;
  fullHeight?: boolean;
}

const ContainerComponent = ({
  children,
  fullCentralized,
}: ContainerComponentInterface) => {
  return <Container fullCentralized={fullCentralized}>{children}</Container>;
};

export default ContainerComponent;
