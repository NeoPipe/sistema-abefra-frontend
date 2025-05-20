import Container from "../../components/atoms/Container";
import Input from "../../components/atoms/Input";
import Typography from "../../components/atoms/Typography";

const LoginComponent = () => {
  return (
    <Container fullCentralized fullHeight>
      <Typography as="h1">Sistema ABEFRA</Typography>
      <Input placeholder="Usuário"></Input>
      <Input placeholder="senha"></Input>
    </Container>
  );
};

export default LoginComponent;
