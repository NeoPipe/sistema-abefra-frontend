import { margins } from "../../assets/styles/variables";
import Button from "../../components/atoms/Button";
import Container from "../../components/atoms/Container";
import Input from "../../components/atoms/Input";
import LoginForm from "../../components/atoms/LoginForm";
import Logo from "../../components/atoms/Logo";
import abefraPicture from "../../assets/images/abefra-picture.jpg";
import Typography from "../../components/atoms/Typography";

import * as AuthService from "../../services/Auth";
import { useNavigation } from "../../shared/useNavigation";

import { useState } from "react";

const LoginComponent = () => {
  const { goToHome } = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (event) => {
    event.preventDefault();

    const statusCode = await AuthService.signin({ username, password });
    if (statusCode === 200) goToHome();
  };

  return (
    <Container fullCentralized fullHeight fullWidth displayFlex directionColumn>
      <Logo src={abefraPicture} />
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
          type="password"
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
