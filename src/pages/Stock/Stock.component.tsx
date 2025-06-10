import { useState } from "react";
import Container from "../../components/atoms/Container";
import ButtonComponent from "../../components/atoms/Button";
import { ButtonWrapper } from "./Stock.style";
import ListComponent from "../../components/molecules/List";

const Stock = () => {
  const [productList, setProductList] = useState([
    { description: "Milk (1L carton)", quantity: 2, dueDate: "06/06" },
    { description: "Eggs (dozen)", quantity: 1, dueDate: "10/06" },
    { description: "Fresh strawberries", quantity: 3, dueDate: "05/06" },
    { description: "Cheddar cheese block", quantity: 1, dueDate: "20/06" },
    { description: "Spinach (bag)", quantity: 2, dueDate: "07/06" },
    { description: "Yogurt (individual cups)", quantity: 6, dueDate: "12/06" },
    { description: "Chicken breast (frozen)", quantity: 4, dueDate: "30/06" },
    { description: "Canned beans", quantity: 5, dueDate: "03/07" },
    { description: "Bread (whole grain loaf)", quantity: 1, dueDate: "08/06" },
    { description: "Apples", quantity: 6, dueDate: "18/06" },
  ]);

  return (
    <Container>
      <ButtonWrapper>
        <ButtonComponent>Adicionar</ButtonComponent>
        <ButtonComponent>Cadastrar</ButtonComponent>
      </ButtonWrapper>

      <ListComponent data={productList}></ListComponent>
    </Container>
  );
};

export default Stock;
