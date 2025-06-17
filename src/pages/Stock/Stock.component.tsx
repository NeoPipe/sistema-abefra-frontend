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

import { getStock } from "../../services/Stock";
import { postProduct, getProducts } from "../../services/Product";

import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const Stock = () => {
  const [stockList, setStockList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productInput, setProductInput] = useState("");

  const fetchStockData = async () => {
    const response = await getStock();
    setStockList(response.data);
  };

  const fetchProductData = async () => {
    const response = await getProducts();
    setProductList(response.items);
  };

  const addProduct = async () => {
    const response = await postProduct(productInput);
    console.log(response.status);
    if (response.status === 201) {
      setIsWaitingCadastrar(false);
      setCadastrarSucess(true);
    }
    setTimeout(() => setCadastrarSucess(false), 2000);
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  const [cadastrarIsOpen, setCadastrarIsOpen] = useState(false);
  const [isWaitingCadastrar, setIsWaitingCadastrar] = useState(false);
  const [cadastrarSucess, setCadastrarSucess] = useState(false);
  const [adicionarIsOpen, setAdicionarIsOpen] = useState(false);
  const customStyles = {
    content: {
      width: sizes.size50Percent,
      height: sizes.size50Percent,
      top: sizes.size50Percent,
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
          <ButtonComponent
            onClick={() => {
              addProduct();
              setIsWaitingCadastrar(true);
            }}
          >
            {isWaitingCadastrar
              ? "Carregando..."
              : cadastrarSucess
              ? "Adicionado!"
              : "Adicionar"}
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
            <InputComponent placeholder="Produto" list="product-list" />
            <datalist id="product-list">
              {productList.map((item) => (
                <option key={item.id} value={item.description} />
              ))}
            </datalist>
            <InputWrapper>
              <input type="date" />
              <div>
                <label htmlFor="quantity">Quantidade:</label>
                <input type="number" id="quantity" />
              </div>
            </InputWrapper>
          </div>

          <ButtonComponent onClick={() => {}}>Adicionar</ButtonComponent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Stock;
