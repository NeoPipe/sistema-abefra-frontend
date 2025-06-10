import styled from "styled-components";
import { sizes, margins } from "../../assets/styles/variables";

export const SearchWrapper = styled.div`
  width: ${sizes.size100Percent};
  padding: 0 ${margins.marginMd};
  margin: ${margins.marginMd} 0;

  display: flex;
  flex-direction: space-between;
  gap: ${margins.marginLg};
`;

export const ListContainer = styled.div`
  width: ${sizes.size100Percent};
  border-top-left-radius: ${sizes.size10};
  border-top-right-radius: ${sizes.size10};
`;

export const ButtonWrapper = styled.div`
  width: ${sizes.size100Percent};
  display: flex;
`;
