import React, { useState } from "react";
import "./App.css";
import { ButtonComponent } from "./components/ButtonComponent";
import ItemListComponent from "./components/ItemListComponent";
import initialState from "./state";

// HOOK
function useUpdateQuality() {
  const [value, setValue] = useState(initialState.items);
  return () =>
    setValue((value) => {
      return initialState.updateQuality();
    });
}

function App() {
  const updateQuality = useUpdateQuality();
  return (
    <div className="gildenrose__container">
      <ButtonComponent onClick={updateQuality} className="gildenrose__button">
        Update Quality
      </ButtonComponent>
      <ItemListComponent items={initialState.items}></ItemListComponent>
    </div>
  );
}

export default App;
