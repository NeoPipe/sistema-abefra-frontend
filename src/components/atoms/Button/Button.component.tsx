import type { ReactNode } from "react";
import Button from "./Button.style";

interface ButtonComponentInterface
  extends React.ComponentPropsWithRef<typeof Button> {
  children?: ReactNode;
}

const ButtonComponent = ({ children, ...rest }: ButtonComponentInterface) => {
  return <Button {...rest}>{children}</Button>;
};

export default ButtonComponent;
