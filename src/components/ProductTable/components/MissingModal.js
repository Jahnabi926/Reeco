import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledMissingModal,
  ModalClose,
  ModalOverlay,
  ActionButtons,
  CancelButton,
  SendButton,
} from "../../../styles/ModalStyledComponents";
import {
  hideMissingModal,
  rejectProduct,
  sendChanges,
} from "../../../redux/actions";

const MissingModal = ({ onCloseButtonClick }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.productTable.selectedProduct
  );

  const handleNoButtonClick = () => {
    dispatch(rejectProduct(selectedProduct.id, "Missing"));
    dispatch(hideMissingModal());
  };

  const handleYesButtonClick = () => {
    dispatch(rejectProduct(selectedProduct.id, "Missing-Urgent"));
    dispatch(sendChanges());
    dispatch(hideMissingModal());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCloseButtonClick();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onCloseButtonClick]);

  return (
    <ModalOverlay>
      {" "}
      <StyledMissingModal ref={modalRef}>
        <ModalClose onClick={onCloseButtonClick}>&#10005;</ModalClose>
        {selectedProduct && (
          <>
            <div>
              <b>Missing Product</b>

              <p>Is "{selectedProduct.product_name}" urgent ?</p>
            </div>
          </>
        )}
        <ActionButtons>
          {" "}
          <CancelButton onClick={handleNoButtonClick}>No</CancelButton>
          <SendButton onClick={handleYesButtonClick}>Yes</SendButton>
        </ActionButtons>
      </StyledMissingModal>
    </ModalOverlay>
  );
};

export default MissingModal;
