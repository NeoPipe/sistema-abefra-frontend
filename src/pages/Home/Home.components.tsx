import Container from "../../components/atoms/Container";
import Cell from "../../components/molecules/Cell";
import List from "../../components/organisms/List";

const HomeComponent = () => {
  return (
    <Container fullCentralized fullHeight fullWidth displayFlex directionColumn>
      <List>
        <Cell
          description="Tung Tung Sahur"
          quantity={20}
          dueDate={new Date()}
        ></Cell>
      </List>
    </Container>
  );
};

export default HomeComponent;
