import Container from "../../components/atoms/Container";
import Cell from "../../components/molecules/Cell";

const HomeComponent = () => {
  return (
    <Container fullCentralized fullHeight fullWidth displayFlex directionColumn>
      <Cell
        description="Tung Tung Sahur"
        quantity={20}
        dueDate={new Date()}
      ></Cell>
    </Container>
  );
};

export default HomeComponent;
