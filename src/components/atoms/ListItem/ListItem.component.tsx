import { FaEllipsisH } from "react-icons/fa";
import { Item, InfoWrapper, OptionsIcon, ItemOptions } from "./ListItem.style";
import { colors, fontSizes, sizes } from "../../../assets/styles/variables";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";

import TypographyComponent from "../Typography";
import ButtonComponent from "../Button";
import {
  ModalContainer,
  ModalTitle,
  ExitModal,
} from "../../../pages/Stock/Stock.style";

import { editFromStock } from "../../../services/Stock";

interface ListItemInterface {
  itemInfo: {
    id: string;
    productId: string;
    productDescription: string;
    quantity: number;
    dueDate: string;
  };
}

const ListItem = ({ itemInfo }: ListItemInterface) => {
  const { id, productDescription, quantity, dueDate } = itemInfo;
  const formattedDueDate = dueDate.slice(5, -14).replace("-", "/");
  const today = new Date();
  const expiration = new Date(dueDate);

  let expiredColor = colors.white;
  if (today.getTime() > expiration.getTime()) {
    expiredColor = colors.redOpacity;
  }

  const [showItemOptions, setShowItemOptions] = useState("none");
  const [excluirIsOpen, setExcluirIsOpen] = useState(false);
  const [editarIsOpen, setEditarIsOpen] = useState(false);
  const [quantityInput, setQuantityInput] = useState(0);
  const [removeReasonId, setRemoveReasonId] = useState("1");

  const customStyles = {
    content: {
      width: sizes.size90Percent,
      top: sizes.size50Percent,
      left: sizes.size50Percent,
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  const editItem = async () => {
    await editFromStock(id, quantityInput, removeReasonId);
    setEditarIsOpen(false);
  };

  // const deleteItem = async () => {
  //   await deleteFromStock(productId);
  //   setExcluirIsOpen(false);
  // };

  return (
    <Item key={id} style={{ backgroundColor: expiredColor }}>
      <InfoWrapper>
        <div>
          <p>{productDescription}</p>
          <span>
            {quantity} unidade{quantity !== 1 ? "s" : ""}
          </span>
        </div>
        <div>
          <p>Venc: {formattedDueDate}</p>
        </div>
      </InfoWrapper>
      <OptionsIcon onClick={() => setShowItemOptions("flex")}>
        <FaEllipsisH />
      </OptionsIcon>

      <ItemOptions style={{ display: showItemOptions }}>
        <button onClick={() => setEditarIsOpen(true)}>Editar</button>
        {/* <button onClick={() => setExcluirIsOpen(true)}>Excluir</button> */}
        <div onClick={() => setShowItemOptions("none")}>
          <IoClose fontSize={fontSizes.fontSize32} color={colors.white} />
        </div>
      </ItemOptions>

      <Modal isOpen={excluirIsOpen} style={customStyles} ariaHideApp={false}>
        <ModalContainer>
          <div>
            <ModalTitle>
              <TypographyComponent as="h4">Excluir produto</TypographyComponent>
              <ExitModal onClick={() => setExcluirIsOpen(false)}>
                <IoClose fontSize={fontSizes.fontSize24} color={colors.white} />
              </ExitModal>
            </ModalTitle>
            <p>Confirmar exclusão do produto: {productDescription}</p>
          </div>
          <ButtonComponent
            onClick={() => {
              // deleteItem();
            }}
          >
            Excluir
          </ButtonComponent>
        </ModalContainer>
      </Modal>

      <Modal isOpen={editarIsOpen} style={customStyles} ariaHideApp={false}>
        <ModalContainer>
          <div>
            <ModalTitle>
              <TypographyComponent as="h4">Editar produto</TypographyComponent>
              <ExitModal onClick={() => setEditarIsOpen(false)}>
                <IoClose fontSize={fontSizes.fontSize24} color={colors.white} />
              </ExitModal>
            </ModalTitle>
            <p>Produto selecionado: {productDescription}</p>
            <div>
              <label htmlFor="quantity">Quantidade a ser removida:</label>
              <input
                type="number"
                id="quantity"
                value={quantityInput}
                onChange={(e) => setQuantityInput(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="motive">Motivo da alteração:</label>
              <br />
              <select
                name=""
                id="motive"
                value={removeReasonId}
                onChange={(e) => setRemoveReasonId(e.target.value)}
              >
                <option value="1">Prodto Vencido</option>
                <option value="2">Consumo</option>
                <option value="3">Doação</option>
                <option value="4">Produto Danificado</option>
                <option value="5">Descarte</option>
              </select>
            </div>
          </div>
          <ButtonComponent
            onClick={() => {
              editItem();
            }}
          >
            Editar
          </ButtonComponent>
        </ModalContainer>
      </Modal>
    </Item>
  );
};

export default ListItem;
