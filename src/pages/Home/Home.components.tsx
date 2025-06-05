import { Container } from "react-grid-system";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import Cell from "../../components/molecules/Cell";
import List from "../../components/organisms/List/List.style";
import { ColWrapper, SearchWrapper, StockButtonWrapper } from "./Home.style";

const Home = () => {
  const stockProducts = [
    {
      id: 1,
      description: "Leite ninho",
      quantity: 3,
      dueDate: new Date(),
    },
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
    <Container>
      <SearchWrapper>
        <ColWrapper xs={8}>
          <Input placeholder="Pesquisar" />
        </ColWrapper>
        <ColWrapper xs={4} style={{ display: "flex", width: "100%" }}>
          <Button>Filtros</Button>
        </ColWrapper>
      </SearchWrapper>
      <StockButtonWrapper>
        <Button>Estoque</Button>
      </StockButtonWrapper>

      <Container>
        <Container>
          <Button>7 DIAS</Button>
          <Button>10 DIAS</Button>
          <Button>15 DIAS</Button>
        </Container>

        <Container>
          <List>{listStockProducts}</List>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
