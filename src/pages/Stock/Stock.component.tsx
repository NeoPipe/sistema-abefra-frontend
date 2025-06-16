import { useState, useEffect } from "react";
import Container from "../../components/atoms/Container";
import ButtonComponent from "../../components/atoms/Button";
import { ButtonWrapper } from "./Stock.style";
import ListComponent from "../../components/molecules/List";

import { getStock } from "../../services/Stock";

const Stock = () => {
  const [stockList, setStockList] = useState([]);

  const fetchData = async () => {
    const response = await getStock();
    setStockList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ButtonWrapper>
        <ButtonComponent>Adicionar</ButtonComponent>
        <ButtonComponent>Cadastrar</ButtonComponent>
      </ButtonWrapper>

      <ListComponent data={stockList}></ListComponent>
    </Container>
  );
};

export default Stock;
