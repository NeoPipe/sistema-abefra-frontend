import { FaEllipsisH } from "react-icons/fa";
import { Item, InfoWrapper, OptionsIcon } from "./ListItem.style";

interface ListItemInterface {
  itemInfo: {
    id: string;
    productDescription: string;
    quantity: number;
    dueDate: string;
  };
}

const ListItem = ({ itemInfo }: ListItemInterface) => {
  const { id, productDescription, quantity, dueDate } = itemInfo;
  const formattedDueDate = dueDate.slice(5, -14).replace("-", "/");

  return (
    <Item key={id}>
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
      <OptionsIcon>
        <FaEllipsisH />
      </OptionsIcon>
    </Item>
  );
};

export default ListItem;
