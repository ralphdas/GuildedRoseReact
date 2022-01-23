import React from "react";
import { ItemContext } from "../context/ItemContext";
import { ItemListEntryComponent } from "./ItemListEntryComponent";

export default function ItemListComponent() {
  const items = React.useContext(ItemContext);
  return (
    <ul className="gildenrose__list">
      {items.map((item, index) => {
        return (
          <ItemListEntryComponent
            item={item}
            key={`${index}`}
          ></ItemListEntryComponent>
        );
      })}
    </ul>
  );
}
