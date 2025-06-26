import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";
import Typography from "../../components/atoms/Typography";

import { ButtonWrapper, ListContainer, SearchWrapper } from "./Home.style";

import {
  colors,
  fontSizes,
  margins,
  sizes,
} from "../../assets/styles/variables";
import ListComponent from "../../components/molecules/List";
import SearchInput from "../../components/molecules/SearchInput";

import { getStockByDate } from "../../services/Stock";
import { useNavigation } from "../../shared/useNavigation";

const Home = () => {
  const [productsByExpiration, setProductsByExpiration] = useState([]);

  const { goToSignIn } = useNavigation();

  const fetchData = async (startDate: number, endDate: number) => {
    const response = await getStockByDate(startDate, endDate);
    if (response.data) setProductsByExpiration(response.data);
    else goToSignIn();
  };

  useEffect(() => {
    fetchData(0, oneDayInMs * 7);
  }, []);

  const oneDayInMs = 24 * 60 * 60 * 1000;
  const buttonList = [
    {
      text: "7 DIAS",
      color: colors.darkOrange,
      option: 0,
      startDate: 0,
      endDate: oneDayInMs * 7,
    },
    {
      text: "10 DIAS",
      color: colors.mediumOrange,
      option: 1,
      startDate: oneDayInMs * 7,
      endDate: oneDayInMs * 10,
    },
    {
      text: "15 DIAS",
      color: colors.lightOrange,
      option: 2,
      startDate: oneDayInMs * 10,
      endDate: oneDayInMs * 15,
    },
  ];
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <>
      <SearchWrapper>
        <SearchInput />
        <Button
          onClick={() => alert("Função em desenvolvimento...")}
          style={{ width: sizes.size100, fontSize: fontSizes.fontSize16 }}
        >
          Filtros
        </Button>
      </SearchWrapper>

      <SearchWrapper>
        <Link
          to="/stock"
          style={{ textDecorationLine: "none", width: sizes.size100Percent }}
        >
          <Button style={{ fontSize: fontSizes.fontSize16 }}>Estoque</Button>
        </Link>
      </SearchWrapper>

      <SearchWrapper>
        <Link
          to="/history"
          style={{ textDecorationLine: "none", width: sizes.size100Percent }}
        >
          <Button style={{ fontSize: fontSizes.fontSize16 }}>Histórico</Button>
        </Link>
      </SearchWrapper>

      <Typography
        as="h2"
        style={{
          fontWeight: "normal",
          textAlign: "center",
          marginBottom: margins.marginSm,
        }}
      >
        Próximo do vencimento
      </Typography>

      <ListContainer
        style={{
          backgroundColor:
            selectedOption === 0
              ? colors.darkOrange
              : selectedOption === 1
              ? colors.mediumOrange
              : selectedOption === 2
              ? colors.lightOrange
              : "",
        }}
      >
        <ButtonWrapper style={{ display: "flex" }}>
          {buttonList.map((item) => (
            <Button
              key={item.option}
              onClick={() => {
                setSelectedOption(item.option);
                fetchData(item.startDate, item.endDate);
              }}
              style={{
                backgroundColor: item.color,
                color: colors.black,
                height: sizes.size60,
                fontSize: fontSizes.fontSize16,
              }}
            >
              {item.text}
            </Button>
          ))}
        </ButtonWrapper>

        <ListComponent data={productsByExpiration}></ListComponent>
      </ListContainer>
    </>
  );
};

export default Home;
