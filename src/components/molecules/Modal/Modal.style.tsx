import styled from "styled-components";
import { sizes } from "../../../assets/styles/variables";

interface ModalInterface {
  fullCentralized?: boolean;
}

const Modal = styled.div<ModalInterface>`
  border: none;
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-top: ${sizes.size50Percent};
  margin-left: ${sizes.size10Percent};
  margin-right: ${sizes.size10Percent};
`;

export default Modal;
