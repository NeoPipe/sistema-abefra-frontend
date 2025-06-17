import styled from "styled-components";
import {
  sizes,
  margins,
  colors,
  fontSizes,
} from "../../assets/styles/variables";

export const ButtonWrapper = styled.div`
  width: ${sizes.size100Percent};
  padding: 0 ${margins.marginMd};
  margin: ${margins.marginMd} 0;

  display: flex;
  flex-direction: space-between;
  gap: ${margins.marginLg};
`;

export const ModalContainer = styled.div`
  width: auto;
  height: ${sizes.size100Percent};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ExitModal = styled.div`
  width: ${sizes.size28};
  height: ${sizes.size28};
  background-color: ${colors.darkGreen};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${margins.marginSm};
`;

export const InputWrapper = styled.div`
  width: ${sizes.size100Percent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${margins.marginSm};

  input {
    width: ${sizes.size40Percent};
    height: ${sizes.size40};
    border-radius: ${sizes.size10};
    border: 1px solid ${colors.blackOpacity};
    color: ${colors.black};
    text-align: center;
  }

  label {
    font-size: ${fontSizes.fontSize16};
    margin-right: ${margins.marginXs};
  }

  div {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
