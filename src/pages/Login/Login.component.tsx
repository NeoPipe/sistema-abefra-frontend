import { margins } from "../../assets/styles/variables";
import Button from "../../components/atoms/Button";
import Container from "../../components/atoms/Container";
import Input from "../../components/atoms/Input";
import LoginForm from "../../components/atoms/LoginForm";
import Logo from "../../components/atoms/Logo";
import Typography from "../../components/atoms/Typography";
// import * as AuthService from "../../services/Auth";
import { useNavigation } from "../../shared/useNavigation";
import axios from "axios";

import { useState } from "react";

const LoginComponent = () => {
  const { goToHome } = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (event) => {
    event.preventDefault();

    await axios
      .post("https://sistema-abefra-backend.onrender.com/v1/auth/login", {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        goToHome();
      });
  };

  return (
    <Container fullCentralized fullHeight fullWidth displayFlex directionColumn>
      <Logo src="https://img.cancaonova.com/cnimages/canais/uploads/sites/2/2022/10/S%C3%A3o-Francisco-de-Assis-300-x-300-1.jpg" />
      <Typography as="h1" marginBottom={margins.marginMd} fullCentralized>
        Sistema ABEFRA
      </Typography>
      <LoginForm action="">
        <Input
          placeholder="Usuário"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></Input>
        <Input
          placeholder="Senha"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></Input>
        <Button type="submit" onClick={() => signIn(event)}>
          Entrar
        </Button>
      </LoginForm>
    </Container>
  );
};

export default LoginComponent;
