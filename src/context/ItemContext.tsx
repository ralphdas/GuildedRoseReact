import React, { useState } from "react";
import initialState from "../state";

const ItemContext = React.createContext(initialState.items);

// HOOK
function useUpdateQuality() {
  const [value, setValue] = useState(initialState.items);
  return () =>
    setValue((value) => {
      return initialState.updateQuality();
    });
}

function ItemContextComponent({ children }: { children: any }) {
  return (
    <ItemContext.Provider value={initialState.items}>
      {children}
    </ItemContext.Provider>
  );
}

export { ItemContext, useUpdateQuality, ItemContextComponent };
