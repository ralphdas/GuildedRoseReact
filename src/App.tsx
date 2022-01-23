import { ButtonComponent } from "./components/ButtonComponent";
import ItemListComponent from "./components/ItemListComponent";
import { ItemContextComponent, useUpdateQuality } from "./context/ItemContext";

function App() {
  const updateQuality = useUpdateQuality();
  return (
    <div className="gildenrose__container">
      <ButtonComponent onClick={updateQuality} className="gildenrose__button">
        Update Quality
      </ButtonComponent>
      <ItemContextComponent>
        <ItemListComponent></ItemListComponent>
      </ItemContextComponent>
    </div>
  );
}

export default App;
