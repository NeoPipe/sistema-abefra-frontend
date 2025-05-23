import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";

interface CellComponentInterface {
  description: string;
  quantity: number;
  dueDate: Date;
}

const CellComponent = ({
  description,
  quantity,
  dueDate,
}: CellComponentInterface) => {
  return (
    <Container>
      <Typography as="h2">{description}</Typography>
      <Typography as="h3">{quantity}</Typography>
      <Typography as="h3">{dueDate.getDate()}</Typography>
    </Container>
  );
};

export default CellComponent;
