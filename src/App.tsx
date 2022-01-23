import styled from "styled-components";
import { ButtonComponent } from "./components/ButtonComponent";
import ItemListComponent from "./components/ItemListComponent";
import { ItemContextComponent, useUpdateQuality } from "./context/ItemContext";

function App() {
  const updateQuality = useUpdateQuality();
  return (
    <Container>
      <ButtonComponent onClick={updateQuality} className="gildenrose__button">
        Update Quality
      </ButtonComponent>
      <ItemContextComponent>
        <ItemListComponent></ItemListComponent>
      </ItemContextComponent>
    </Container>
  );
}

const Container = styled.div`
  max-width: 960px;
  flex: 1;
`;

export default App;
