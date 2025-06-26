import styled from "styled-components";
import { sizes, colors, margins } from "../../assets/styles/variables";

export const HistoryItem = styled.li`
  width: ${sizes.size100Percent};
  height: ${sizes.size64};
  margin: 0 auto;
  background-color: ${colors.white};
  padding: 0 ${margins.marginSm};

  list-style: none;
  border-radius: ${sizes.size10};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${margins.marginSm};
`;

export const ButtonWrapper = styled.div`
  width: ${sizes.size100Percent};
  padding: 0 ${margins.marginMd};
  margin: ${margins.marginMd} 0;

  display: flex;
  flex-direction: space-between;
  gap: ${margins.marginLg};
`;
