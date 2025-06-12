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
import type { StockProductInterface } from "../../models/interfaces/stock-product";

import axios from "axios";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [productsByExpiration, setProductsByExpiration] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://sistema-abefra-backend.onrender.com/v1/stock", config)
        .then((res) => setProductList(res.data.data));
    }
    fetchData();
  }, []);

  const filterByExpirationDate = (days) => {
    const currentTimestamp = Date.now();
    let filteredList;

    if (days === oneDayInMs * 7) {
      filteredList = productList.filter(
        (item) => Date.parse(item.dueDate) - currentTimestamp < days
      );
    } else if (days === oneDayInMs * 10) {
      filteredList = productList.filter(
        (item) =>
          Date.parse(item.dueDate) - currentTimestamp < days &&
          Date.parse(item.dueDate) - currentTimestamp > oneDayInMs * 7
      );
    } else if (days === oneDayInMs * 15) {
      filteredList = productList.filter(
        (item) =>
          Date.parse(item.dueDate) - currentTimestamp < days &&
          Date.parse(item.dueDate) - currentTimestamp > oneDayInMs * 10
      );
    }

    filteredList.sort((a, b) => a.dueDate.localeCompare(b.dueDate));

    setProductsByExpiration(filteredList);
  };

  const oneDayInMs = 24 * 60 * 60 * 1000;
  const buttonList = [
    {
      text: "7 DIAS",
      color: colors.darkOrange,
      option: 0,
      days: oneDayInMs * 7,
    },
    {
      text: "10 DIAS",
      color: colors.mediumOrange,
      option: 1,
      days: oneDayInMs * 10,
    },
    {
      text: "15 DIAS",
      color: colors.lightOrange,
      option: 2,
      days: oneDayInMs * 15,
    },
  ];
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <>
      <SearchWrapper>
        <SearchInput />
        <Button
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
              onClick={() => {
                setSelectedOption(item.option);
                filterByExpirationDate(item.days);
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
