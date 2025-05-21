import { useFormik } from "formik";
import { signin } from "../../api/auth";
import Button from "../../components/atoms/Button";
import Container from "../../components/atoms/Container";
import Input from "../../components/atoms/Input";
import Typography from "../../components/atoms/Typography";
import Logo from "../../components/atoms/Logo";

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
    <Container fullCentralized fullHeight>
      <Logo src="https://img.cancaonova.com/cnimages/canais/uploads/sites/2/2022/10/S%C3%A3o-Francisco-de-Assis-300-x-300-1.jpg" />
      <Typography as="h1">Sistema ABEFRA</Typography>
      <form action="" onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Usuário"
          id="username"
          onChange={formik.handleChange}
        ></Input>
        <Input
          placeholder="senha"
          id="password"
          onChange={formik.handleChange}
        ></Input>
        <Button type="submit">asdasdsa</Button>
      </form>
    </Container>
  );
};

export default LoginComponent;
