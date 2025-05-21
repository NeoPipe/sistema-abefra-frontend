import Logo from "./Logo.style";

interface LogoComponentInterface extends React.ComponentPropsWithRef<"img"> {
  src?: string;
}

const LogoComponent = ({ ...rest }: LogoComponentInterface) => {
  return <Logo {...rest} />;
};

export default LogoComponent;
