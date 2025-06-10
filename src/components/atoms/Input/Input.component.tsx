import Input from "./Input.style";

interface InputComponentInterface
  extends React.ComponentPropsWithRef<typeof Input> {
  placeholder: string;
}

const InputComponent = ({ ...rest }: InputComponentInterface) => {
  return (
    <>
      <Input {...rest} />
    </>
  );
};

export default InputComponent;
