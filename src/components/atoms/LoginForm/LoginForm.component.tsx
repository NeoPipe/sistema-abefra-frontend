import LoginForm from "./LoginForm.style";

interface LoginFormComponentInterface
  extends React.ComponentPropsWithRef<"form"> {
  action?: string;
}

const LoginFormComponent = ({ ...rest }: LoginFormComponentInterface) => {
  return <LoginForm {...rest}></LoginForm>;
};

export default LoginFormComponent;
