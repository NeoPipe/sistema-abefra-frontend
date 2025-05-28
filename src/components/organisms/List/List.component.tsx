import Button from "../../atoms/Button";
import Container from "../../atoms/Container/Container.style";
import List, { ColWrapper, DueWrapper } from "./List.style";

interface ListComponentInterface
  extends React.ComponentPropsWithRef<typeof List> {}

const ListComponent = ({ ...rest }: ListComponentInterface) => {
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
        <List {...rest}></List>;
      </Container>
    </Container>
  );
};

export default ListComponent;
