import styled from "styled-components";
import {
  AGED_BRIE,
  BACKSTAGE_PASS,
  CONJURED,
  Item,
  SULFARAS,
} from "../gilded-rose";

export function ItemListEntryComponent({
  item: { name, quality, sellIn },
}: {
  item: Item;
}) {
  return (
    <ItemListEntry name={name}>
      <h1>{name}</h1>
      <p>Quality: {quality}</p>
      <p>Sell in {sellIn} days</p>
    </ItemListEntry>
  );
}

function giveProperBorderColor(name: string): string {
  switch (name) {
    case AGED_BRIE: {
      return "#f39c12";
    }
    case SULFARAS: {
      return "#9b59b6";
    }
    case BACKSTAGE_PASS: {
      return "#1abc9c";
    }
    case CONJURED: {
      return "#34495e";
    }
    default: {
      return "#2ecc71";
    }
  }
}

const ItemListEntry = styled.li<{ name: string }>`
  ${({ name }) => {
    return `
      background-color: #ecf0f1;
      border-radius: 10px;
      padding: 1rem;
      margin-bottom: 1rem;
      box-shadow: 1px 1px 5px 0px #00000057;
      border-left: ${giveProperBorderColor(name)} 1rem solid;`;
  }}
`;

/*
background-color: #ecf0f1;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 1px 1px 5px 0px #00000057;
  border-left: ${(props) => giveProperBorderColor(props.name)} 1rem solid;

*/
