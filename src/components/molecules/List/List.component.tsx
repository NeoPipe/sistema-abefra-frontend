import type { JSX } from "react";
import List from "./List.style";

import ListItem from "../../atoms/ListItem";

interface ListComponentInterface
  extends React.ComponentPropsWithRef<typeof List> {
  // children: JSX.Element[];
  data: Array<object>;
}

const ListComponent = ({ data }: ListComponentInterface) => {
  console.log(data);

  return (
    <List>
      {data.map((item) => (
        <ListItem itemInfo={item} />
      ))}
    </List>
  );
};

export default ListComponent;
