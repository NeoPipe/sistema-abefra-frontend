import { Col, Row } from "react-grid-system";
import styled from "styled-components";

interface ColWrapperInterface {
  $centralized?: boolean;
}

const ColWrapper = styled(Col)<ColWrapperInterface>`
  display: flex;
  width: 80%;
  /* justify-content: ${({ $centralized }: ColWrapperInterface) =>
    !$centralized ? "" : "center"}; */
`;

const SearchWrapper = styled(Row)`
  margin: 1vh;
  display: flex;
  justify-content: space-between;
`;

const StockButtonWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  background-color: pink;
`;

export { ColWrapper, SearchWrapper, StockButtonWrapper };
