import { Col, Row } from "react-grid-system";
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";

const CellComponent = ({
  description,
  quantity,
  dueDate,
}: CellComponentInterface) => {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Row>
            <Typography as="h2">{description}</Typography>
          </Row>
          <Row>
            <Typography as="h3">{quantity}</Typography>
          </Row>
        </Col>

        <Col xs={4}>
          <Typography as="h3">{dueDate.getDate()}</Typography>
        </Col>

        <Col xs={2}>...</Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Row>
            <Typography as="h2">{description}</Typography>
          </Row>
          <Row>
            <Typography as="h3">{quantity}</Typography>
          </Row>
        </Col>

        <Col xs={4}>
          <Typography as="h3">{dueDate.getDate()}</Typography>
        </Col>

        <Col xs={2}>...</Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Row>
            <Typography as="h2">{description}</Typography>
          </Row>
          <Row>
            <Typography as="h3">{quantity}</Typography>
          </Row>
        </Col>

        <Col xs={4}>
          <Typography as="h3">{dueDate.getDate()}</Typography>
        </Col>

        <Col xs={2}>...</Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Row>
            <Typography as="h2">{description}</Typography>
          </Row>
          <Row>
            <Typography as="h3">{quantity}</Typography>
          </Row>
        </Col>

        <Col xs={4}>
          <Typography as="h3">{dueDate.getDate()}</Typography>
        </Col>

        <Col xs={2}>...</Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Row>
            <Typography as="h2">{description}</Typography>
          </Row>
          <Row>
            <Typography as="h3">{quantity}</Typography>
          </Row>
        </Col>

        <Col xs={4}>
          <Typography as="h3">{dueDate.getDate()}</Typography>
        </Col>

        <Col xs={2}>...</Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Row>
            <Typography as="h2">{description}</Typography>
          </Row>
          <Row>
            <Typography as="h3">{quantity}</Typography>
          </Row>
        </Col>

        <Col xs={4}>
          <Typography as="h3">{dueDate.getDate()}</Typography>
        </Col>

        <Col xs={2}>...</Col>
      </Row>
    </Container>
  );
};

export default CellComponent;
