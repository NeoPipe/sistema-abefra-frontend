import { Col, Row } from "react-grid-system";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Button from "../Button";
import Input from "./Input.style";

interface InputComponentInterface
  extends React.ComponentPropsWithRef<typeof Input> {
  placeholder: string;
}

const InputComponent = ({ ...rest }: InputComponentInterface) => {
  return (
    <div>
      <Row style={{ display: "flex" }}>
        <Col xs={10}>
          <Input {...rest} />
        </Col>
        <Col xs={2} style={{ display: "flex" }}>
          <Button style={{ width: "100%", backgroundColor: "black" }}>
            <HiMiniMagnifyingGlass></HiMiniMagnifyingGlass>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default InputComponent;
