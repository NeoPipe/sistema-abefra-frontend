import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";
import Typography from "../../components/atoms/Typography";
import { useState } from "react";

import { SearchWrapper, ListContainer, ButtonWrapper } from "./Home.style";

import {
  sizes,
  fontSizes,
  margins,
  colors,
} from "../../assets/styles/variables";
import SearchInput from "../../components/molecules/SearchInput";
import ListComponent from "../../components/molecules/List";

const Home = () => {
  const productsByExpiration = [
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
  ];

  const buttonList = [
    { text: "7 DIAS", color: colors.darkOrange, option: 0 },
    { text: "10 DIAS", color: colors.mediumOrange, option: 1 },
    { text: "15 DIAS", color: colors.lightOrange, option: 2 },
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
              onClick={() => setSelectedOption(item.option)}
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
