import styled from "styled-components";
import { sizes, margins } from "../../../assets/styles/variables";

const List = styled.ul`
  width: ${sizes.size100Percent};
  background-color: inherit;
  display: flex;
  flex-direction: column;
  gap: ${margins.marginXs};
  padding: ${margins.marginSm};
`;

export default List;
