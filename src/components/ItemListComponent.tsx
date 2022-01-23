import React from "react";
import styled from "styled-components";
import { ItemContext } from "../context/ItemContext";
import { ItemListEntryComponent } from "./ItemListEntryComponent";

export default function ItemListComponent() {
  const items = React.useContext(ItemContext);
  return (
    <ItemList>
      {items.map((item, index) => {
        return (
          <ItemListEntryComponent
            item={item}
            key={`${index}`}
          ></ItemListEntryComponent>
        );
      })}
    </ItemList>
  );
}

const ItemList = styled.ul`
  padding: 0;
  list-style: none;
`;
