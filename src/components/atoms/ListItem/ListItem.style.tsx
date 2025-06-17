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
  position: relative;
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

export const ItemOptions = styled.div`
  position: absolute;
  right: ${margins.marginSm};
  top: 12px;

  display: flex;
  gap: ${margins.marginXs};

  background-color: white;

  button {
    height: ${sizes.size40};
    padding: ${margins.marginSm};
    color: ${colors.black};
    background-color: ${colors.white};
    border: 1px solid ${colors.blackOpacity};
    border-radius: ${sizes.size20};
    font-size: ${fontSizes.fontSize18};

    display: flex;
    align-items: center;
  }

  div {
    height: ${sizes.size40};
    width: ${sizes.size40};
    border-radius: ${sizes.size20};
    background-color: ${colors.exitRed};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
