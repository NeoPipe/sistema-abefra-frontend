import { useState } from "react";

import Container from "../../components/atoms/Container/Container.style";
import ButtonComponent from "../../components/atoms/Button";
// import InputComponent from "../../components/atoms/Input";

import { getStockMovement } from "../../services/History";
import { useNavigation } from "../../shared/useNavigation";
// import { getProducts } from "../../services/Product";

import { HistoryItem, ButtonWrapper } from "./History.style";

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  //   const [productInput, setProductInput] = useState("");
  //   const [productList, setProductList] = useState([]);

  const { goToSignIn } = useNavigation();

  const fetchHistoryData = async () => {
    // const product = productList.find(
    //   (item) => item.description === productInput
    // );

    const response = await getStockMovement();

    if (response.data) setHistoryList(response.data);
    else goToSignIn();

    console.log(response);
  };

  //   const fetchProductData = async () => {
  //     const response = await getProducts();

  //     if (response.items) setProductList(response.items);
  //     else goToSignIn();
  //   };

  //   useEffect(() => {
  //     fetchProductData();
  //   }, []);

  return (
    <Container>
      {/* <ButtonWrapper>
        <InputComponent
          placeholder="Produto"
          list="product-list"
          value={productInput}
          onChange={(e) => setProductInput(e.target.value)}
        />
        <datalist id="product-list">
          {productList.map((item) => (
            <option key={item.id} value={item.description} />
          ))}
        </datalist>
      </ButtonWrapper> */}

      <ButtonWrapper>
        <ButtonComponent
          onClick={() => {
            fetchHistoryData();
          }}
        >
          Buscar Histórico
        </ButtonComponent>
      </ButtonWrapper>

      {historyList.map((item) => (
        <HistoryItem key={item.id}>
          <div>
            <p>{item.productDescription}</p>
            <span>Quantidade: {item.quantity}</span>
          </div>

          <span>
            Tipo:
            {item.movementTypeId == 1
              ? "Adição"
              : item.movementTypeId == 2
              ? "Remoção"
              : item.movementTypeId == 3
              ? "Atualização"
              : ""}
          </span>
          <p>
            Alterado por:{" "}
            {item.removeReasonId === 1
              ? "Produto vencido"
              : item.removeReasonId === 2
              ? "Consumo"
              : item.removeReasonId === 3
              ? "Doação"
              : item.removeReasonId === 4
              ? "Produto danificado"
              : item.removeReasonId === 5
              ? "Descarte"
              : ""}
          </p>
        </HistoryItem>
      ))}
    </Container>
  );
};

export default History;
