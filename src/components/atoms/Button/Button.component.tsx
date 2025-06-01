import type { ReactNode } from "react";
import Button from "./Button.style";

interface ButtonComponentInterface
  extends React.ComponentPropsWithRef<typeof Button> {
  children?: ReactNode;
  hideButton?: boolean;
}

const ButtonComponent = ({
  children,
  hideButton,
  ...rest
}: ButtonComponentInterface) => {
  return (
    <Button $hideButton={hideButton} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
