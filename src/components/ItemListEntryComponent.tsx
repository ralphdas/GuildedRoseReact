import { Item } from "../gilded-rose";

export function ItemListEntryComponent({
  item: { name, quality, sellIn },
}: {
  item: Item;
}) {
  return (
    <li>
      <h1>{name}</h1>
      <p>Quality: {quality}</p>
      <p>Sell in {sellIn} days</p>
    </li>
  );
}
