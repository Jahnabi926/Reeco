import ProductTable from "./components/ProductTable";
import EditModal from "./components/ProductTable/components/EditModal";
import { StyledContainer } from "./styles/TableStyledComponents";

import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "./redux/actions";

const App = () => {
  const showModal = useSelector((state) => state.productTable.showModal);
  const dispatch = useDispatch();

  return (
    <>
      {showModal && (
        <EditModal
          onCloseButtonClick={() => {
            dispatch(hideModal());
          }}
        />
      )}
      <StyledContainer>
        <ProductTable />
      </StyledContainer>
    </>
  );
};

export default App;
