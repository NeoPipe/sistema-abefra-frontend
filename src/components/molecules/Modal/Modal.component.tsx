import type { ReactNode } from "react";
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";
import Modal from "./Modal.style";

interface ModalComponentInterface {
  children?: ReactNode;
  fullCentralized?: boolean;
  title: string;
}

const ModalComponent = ({
  children,
  fullCentralized,
  title,
}: ModalComponentInterface) => {
  return (
    <Container fullCentralized={fullCentralized}>
      <Modal>
        <Typography>{title}</Typography>
        {children}
      </Modal>
    </Container>
  );
};

export default ModalComponent;
