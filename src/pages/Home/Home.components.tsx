import { Container } from "react-grid-system";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import { ColWrapper, SearchWrapper, StockButtonWrapper } from "./Home.style";

const Home = () => {
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
    </Container>
  );
};

export default Home;
