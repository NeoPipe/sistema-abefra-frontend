import List from "./List.style";

import type { StockProductInterface } from "../../../models/interfaces/stock-product";
import ListItem from "../../atoms/ListItem";

interface ListComponentInterface
  extends React.ComponentPropsWithRef<typeof List> {
  data: StockProductInterface[];
}

const ListComponent = ({ data }: ListComponentInterface) => {
  return (
    <List>
      {data.map((item) => (
        <ListItem itemInfo={item} />
      ))}
    </List>
  );
};

export default ListComponent;
