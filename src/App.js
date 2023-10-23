import ProductTable from "./components/ProductTable";
import EditModal from "./components/ProductTable/components/EditModal";
import { StyledContainer } from "./styles/TableStyledComponents";

import { useDispatch, useSelector } from "react-redux";
import { hideEditModal, hideMissingModal } from "./redux/actions";
import MissingModal from "./components/ProductTable/components/MissingModal";

const App = () => {
  const showEditModal = useSelector(
    (state) => state.productTable.showEditModal
  );
  const showMissingModal = useSelector(
    (state) => state.productTable.showMissingModal
  );
  const dispatch = useDispatch();

  return (
    <>
      {showEditModal && (
        <EditModal
          onCloseButtonClick={() => {
            dispatch(hideEditModal());
          }}
        />
      )}
      {showMissingModal && (
        <MissingModal
          onCloseButtonClick={() => {
            dispatch(hideMissingModal());
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
