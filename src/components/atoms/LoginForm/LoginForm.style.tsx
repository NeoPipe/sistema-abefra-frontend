import styled from "styled-components";
import { sizes, margins } from "../../../assets/styles/variables";

interface LoginFormInterface {
  fullCentralized?: boolean;
}

const LoginForm = styled.form<LoginFormInterface>`
  width: ${sizes.size80Percent};

  display: flex;
  flex-direction: column;
  gap: ${margins.marginXs};
`;

export default LoginForm;
