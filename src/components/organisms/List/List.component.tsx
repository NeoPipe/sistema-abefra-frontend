import type { JSX } from "react";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container/Container.style";
import List, { ColWrapper, DueWrapper } from "./List.style";

interface ListComponentInterface
  extends React.ComponentPropsWithRef<typeof List> {
  children: JSX.Element[];
}

const ListComponent = ({ children, ...rest }: ListComponentInterface) => {
  // const listChildren
  return (
    <Container>
      <DueWrapper>
        <ColWrapper xs={4}>
          <Button>7 DIAS</Button>
        </ColWrapper>
        <ColWrapper xs={4}>
          <Button>10 DIAS</Button>
        </ColWrapper>
        <ColWrapper xs={4}>
          <Button>15 DIAS</Button>
        </ColWrapper>
      </DueWrapper>

      <Container>
        <List {...rest}>
          {children.map((c) => {
            return c;
          })}
        </List>
      </Container>
    </Container>
  );
};

export default ListComponent;
