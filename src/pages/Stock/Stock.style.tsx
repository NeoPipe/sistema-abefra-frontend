import styled from "styled-components";
import { sizes, margins } from "../../assets/styles/variables";

export const ButtonWrapper = styled.div`
  width: ${sizes.size100Percent};
  padding: 0 ${margins.marginMd};
  margin: ${margins.marginMd} 0;

  display: flex;
  flex-direction: space-between;
  gap: ${margins.marginLg};
`;
