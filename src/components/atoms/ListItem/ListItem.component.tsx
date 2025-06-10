import { FaEllipsisH } from "react-icons/fa";
import { Item, InfoWrapper, OptionsIcon } from "./ListItem.style";

interface ListItemInterface {
  itemInfo: {
    description: string;
    quantity: number;
    dueDate: string;
  };
}

const ListItem = ({ itemInfo }: ListItemInterface) => {
  const { description, quantity, dueDate } = itemInfo;

  return (
    <Item>
      <InfoWrapper>
        <div>
          <p>{description}</p>
          <span>
            {quantity} unidade{quantity !== 1 ? "s" : ""}
          </span>
        </div>
        <div>
          <p>Venc: {dueDate}</p>
        </div>
      </InfoWrapper>
      <OptionsIcon>
        <FaEllipsisH />
      </OptionsIcon>
    </Item>
  );
};

export default ListItem;
