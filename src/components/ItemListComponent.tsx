import { Item } from "../gilded-rose";
import { ItemListEntryComponent } from "./ItemListEntryComponent";

export default function ItemListComponent({ items }: { items: Item[] }) {
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
