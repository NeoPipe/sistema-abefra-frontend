import { Col } from "react-grid-system";
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";

interface ButtonDayInterface {
  description: string;
}

const ButtonDay = ({ description }: ButtonDayInterface) => {
  return (
    <Container>
      <Col xs={4}>
        <Typography as="h2">{description}</Typography>
      </Col>
      <Col xs={4}>
        <Typography as="h2">{description}</Typography>
      </Col>
      <Col xs={4}>
        <Typography as="h2">{description}</Typography>
      </Col>
    </Container>
  );
};

export default ButtonDay;
