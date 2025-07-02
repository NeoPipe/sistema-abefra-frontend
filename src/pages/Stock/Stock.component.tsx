import { useState, useEffect } from "react";
import Container from "../../components/atoms/Container";
import ButtonComponent from "../../components/atoms/Button";
import InputComponent from "../../components/atoms/Input";
import TypographyComponent from "../../components/atoms/Typography";
import ListComponent from "../../components/molecules/List";
import {
  ButtonWrapper,
  ExitModal,
  ModalTitle,
  ModalContainer,
  InputWrapper,
} from "./Stock.style";
import { sizes, fontSizes, colors } from "../../assets/styles/variables";

import { getStock, addToStock } from "../../services/Stock";
import { postProduct, getProducts } from "../../services/Product";
import { useNavigation } from "../../shared/useNavigation";

import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const Stock = () => {
  const [stockList, setStockList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productInput, setProductInput] = useState("");

  const [stockInput, setStockInput] = useState("");
  const [stockDate, setStockDate] = useState("");
  const [stockQuantity, setStockQuantity] = useState(0);

  const { goToSignIn } = useNavigation();

  const fetchStockData = async () => {
    const response = await getStock();

    if (response.data) setStockList(response.data);
    else goToSignIn();
  };

  const fetchProductData = async () => {
    const response = await getProducts();

    if (response.items) setProductList(response.items);
    else goToSignIn();
  };

  const addProduct = async () => {
    await postProduct(productInput);
    setCadastrarIsOpen(false);
  };

  const addStock = async () => {
    const product = productList.find((item) => item.description === stockInput);
    await addToStock(product.id, stockQuantity, stockDate);
    setAdicionarIsOpen(false);
    fetchStockData();
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  const [cadastrarIsOpen, setCadastrarIsOpen] = useState(false);
  const [adicionarIsOpen, setAdicionarIsOpen] = useState(false);
  const customStyles = {
    content: {
      width: sizes.size90Percent,
      top: sizes.size40Percent,
      left: sizes.size50Percent,
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Container>
      <ButtonWrapper>
        <ButtonComponent
          onClick={() => {
            setAdicionarIsOpen(true);
            fetchProductData();
          }}
        >
          Adicionar
        </ButtonComponent>
        <ButtonComponent onClick={() => setCadastrarIsOpen(true)}>
          Cadastrar
        </ButtonComponent>
      </ButtonWrapper>

      <ListComponent data={stockList}></ListComponent>

      <Modal isOpen={cadastrarIsOpen} style={customStyles} ariaHideApp={false}>
        <ModalContainer>
          <div>
            <ModalTitle>
              <TypographyComponent as="h4">
                Cadastrar produto
              </TypographyComponent>
              <ExitModal onClick={() => setCadastrarIsOpen(false)}>
                <IoClose fontSize={fontSizes.fontSize24} color={colors.white} />
              </ExitModal>
            </ModalTitle>
            <InputComponent
              placeholder="Produto"
              value={productInput}
              onChange={(e) => setProductInput(e.target.value)}
            />
          </div>
          <ButtonComponent onClick={() => addProduct()}>
            Cadastrar
          </ButtonComponent>
        </ModalContainer>
      </Modal>

      <Modal isOpen={adicionarIsOpen} style={customStyles} ariaHideApp={false}>
        <ModalContainer>
          <div>
            <ModalTitle>
              <TypographyComponent as="h4">
                Adicionar produto ao estoque
              </TypographyComponent>
              <ExitModal onClick={() => setAdicionarIsOpen(false)}>
                <IoClose fontSize={fontSizes.fontSize24} color={colors.white} />
              </ExitModal>
            </ModalTitle>
            <InputComponent
              placeholder="Produto"
              list="product-list"
              value={stockInput}
              onChange={(e) => setStockInput(e.target.value)}
            />
            <datalist id="product-list">
              {productList.map((item) => (
                <option key={item.id} value={item.description} />
              ))}
            </datalist>
            <InputWrapper>
              <input
                type="date"
                value={stockDate}
                onChange={(e) => setStockDate(e.target.value)}
              />
              <div>
                <label htmlFor="quantity">Quantidade:</label>
                <input
                  type="number"
                  id="quantity"
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(Number(e.target.value))}
                />
              </div>
            </InputWrapper>
          </div>

          <ButtonComponent onClick={() => addStock()}>
            Adicionar
          </ButtonComponent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Stock;
