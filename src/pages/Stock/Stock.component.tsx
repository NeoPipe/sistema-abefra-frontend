import { useState, useEffect } from "react";
import Container from "../../components/atoms/Container";
import ButtonComponent from "../../components/atoms/Button";
import { ButtonWrapper } from "./Stock.style";
import ListComponent from "../../components/molecules/List";

import axios from "axios";

const Stock = () => {
  const [stockList, setStockList] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const getProducts = async () => {
    axios
      .get("https://sistema-abefra-backend.onrender.com/v1/stock", config)
      .then((res) => setStockList(res.data.data));
  };

  useEffect(() => {
    getProducts();
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
