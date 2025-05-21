import Container from "../../components/atoms/Container";
import Input from "../../components/atoms/Input";
import Typography from "../../components/atoms/Typography";
import Logo from "../../components/atoms/Logo";

const LoginComponent = () => {
  return (
    <Container fullCentralized fullHeight>
      <Logo src="https://img.cancaonova.com/cnimages/canais/uploads/sites/2/2022/10/S%C3%A3o-Francisco-de-Assis-300-x-300-1.jpg" />
      <Typography as="h1">Sistema ABEFRA</Typography>
      <Input placeholder="Usuário"></Input>
      <Input placeholder="senha"></Input>
    </Container>
  );
};

export default LoginComponent;
