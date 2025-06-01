import Container from "../../components/atoms/Container";
import Typography from "../../components/atoms/Typography";
import Cell from "../../components/molecules/Cell";
import List from "../../components/organisms/List";

const HomeComponent = () => {
  const stockProducts = [
    {
      id: 1,
      description: "Leite ninho",
      quantity: 3,
      dueDate: new Date(),
    },
    // {
    //   id: 2,
    //   description: "Leite ninho",
    //   quantity: 3,
    //   dueDate: new Date(),
    // },
    // {
    //   id: 3,
    //   description: "Leite ninho",
    //   quantity: 3,
    //   dueDate: new Date(),
    // },
    // {
    //   id: 4,
    //   description: "Leite ninho",
    //   quantity: 3,
    //   dueDate: new Date(),
    // },
    // {
    //   id: 5,
    //   description: "Leite ninho",
    //   quantity: 3,
    //   dueDate: new Date(),
    // },
    // {
    //   id: 6,
    //   description: "Leite ninho",
    //   quantity: 3,
    //   dueDate: new Date(),
    // },
  ];

  const listStockProducts = stockProducts.map((c) => (
    <Cell
      key={c.id}
      description={c.description}
      quantity={c.quantity}
      dueDate={c.dueDate}
    ></Cell>
  ));

  return (
    <Container fullCentralized fullHeight fullWidth displayFlex directionColumn>
      <Typography>Próximos do vencimento</Typography>

      <List>{listStockProducts}</List>
    </Container>
  );
};

export default HomeComponent;
