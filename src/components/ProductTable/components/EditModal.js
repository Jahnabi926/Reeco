import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  sendChanges,
  cancelChanges,
} from "../../../redux/actions";
import { EditModalImage } from "./Images";
import {
  Modal,
  ModalClose,
  ModalOverlay,
  Product,
  TextMuted,
  ProductDetails,
  ProductDetailsContent,
  ActionButtons,
  CancelButton,
  SendButton,
  QuantityButton,
} from "../../../styles/ModalStyledComponents";

const EditModal = ({ onCloseButtonClick }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.productTable.selectedProduct
  );

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(selectedProduct.id));
  };

  const handleDecreaseQuantity = () => {
    if (selectedProduct.quantity > 0) {
      dispatch(decreaseQuantity(selectedProduct.id));
    }
  };

  const handleSendChanges = () => {
    dispatch(sendChanges());
    onCloseButtonClick();
  };

  const handleCancelChanges = () => {
    dispatch(cancelChanges());
    onCloseButtonClick();
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
      <Modal ref={modalRef}>
        <ModalClose onClick={onCloseButtonClick}>&#10005;</ModalClose>
        {selectedProduct && (
          <>
            <div>
              <b>{selectedProduct.product_name}</b>
              <TextMuted>{selectedProduct.brand}</TextMuted>
            </div>
            <Product>
              <EditModalImage value={selectedProduct.icon} />
              <ProductDetails>
                {" "}
                <p>
                  Price($):{" "}
                  <ProductDetailsContent>
                    {selectedProduct.price}
                  </ProductDetailsContent>
                </p>
                <p>
                  Quantity:{" "}
                  <QuantityButton onClick={handleDecreaseQuantity}>
                    -
                  </QuantityButton>
                  <ProductDetailsContent>
                    {selectedProduct.quantity}
                  </ProductDetailsContent>
                  <QuantityButton onClick={handleIncreaseQuantity}>
                    +
                  </QuantityButton>
                </p>
                <p>
                  Total:{" "}
                  <ProductDetailsContent>
                    {selectedProduct.total}
                  </ProductDetailsContent>
                </p>
              </ProductDetails>
            </Product>
          </>
        )}
        <ActionButtons>
          {" "}
          <CancelButton onClick={handleCancelChanges}>Cancel</CancelButton>
          <SendButton onClick={handleSendChanges}>Send</SendButton>
        </ActionButtons>
      </Modal>
    </ModalOverlay>
  );
};

export default EditModal;
