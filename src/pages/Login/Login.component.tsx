import { useFormik } from "formik";
import { signin } from "../../api/auth";
import { margins } from "../../assets/styles/variables";
import Button from "../../components/atoms/Button";
import Container from "../../components/atoms/Container";
import Input from "../../components/atoms/Input";
import LoginForm from "../../components/atoms/LoginForm";
import Logo from "../../components/atoms/Logo";
import Typography from "../../components/atoms/Typography";

const LoginComponent = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      signin({ username: values.username, password: values.password });
    },
  });

  return (
    <Container fullCentralized fullHeight fullWidth displayFlex directionColumn>
      <Logo src="https://img.cancaonova.com/cnimages/canais/uploads/sites/2/2022/10/S%C3%A3o-Francisco-de-Assis-300-x-300-1.jpg" />
      <Typography as="h1" marginBottom={margins.marginMd} fullCentralized>
        Sistema ABEFRA
      </Typography>
      <LoginForm action="" onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Usuário"
          id="username"
          onChange={formik.handleChange}
        ></Input>
        <Input
          placeholder="Senha"
          id="password"
          onChange={formik.handleChange}
        ></Input>
        <Button type="submit">Entrar</Button>
      </LoginForm>
    </Container>
  );
};

export default LoginComponent;
