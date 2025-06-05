import { Col } from "react-grid-system";
import styled from "styled-components";
import { sizes } from "../../../assets/styles/variables";

interface ListInterface {}

const List = styled.div<ListInterface>`
  width: ${sizes.size100Percent};
`;

export const ColWrapper = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const DueWrapper = styled.div`
  display: flex;
  width: ${sizes.size100Percent};
`;

export default List;
