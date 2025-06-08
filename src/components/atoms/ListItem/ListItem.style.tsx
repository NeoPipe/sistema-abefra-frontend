import styled from "styled-components";
import {
  sizes,
  fontSizes,
  margins,
  colors,
} from "../../../assets/styles/variables";

export const Item = styled.li`
  width: ${sizes.size100Percent};
  height: ${sizes.size64};
  margin: 0 auto;
  background-color: ${colors.white};
  padding: 0 ${margins.marginSm};

  list-style: none;
  border-radius: ${sizes.size10};

  display: flex;
  align-items: center;
  gap: ${margins.marginSm};
`;

export const InfoWrapper = styled.div`
  width: ${sizes.size100Percent};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionsIcon = styled.div`
  font-size: ${fontSizes.fontSize20};
  display: flex;
  justify-content: center;
`;
