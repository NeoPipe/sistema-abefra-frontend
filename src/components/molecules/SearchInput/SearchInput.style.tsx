import styled from "styled-components";
import { sizes, colors } from "../../../assets/styles/variables";

export const SearchIcon = styled.div`
  width: ${sizes.size40};
  height: ${sizes.size40};
  border-top: 1px solid ${colors.blackOpacity};
  border-right: 1px solid ${colors.blackOpacity};
  border-bottom: 1px solid ${colors.blackOpacity};
  border-top-right-radius: ${sizes.size10};
  border-bottom-right-radius: ${sizes.size10};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInputWrapper = styled.div`
  width: ${sizes.size100Percent};
  display: flex;
  align-items: center;
`;
