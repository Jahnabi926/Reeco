export const approveProduct = (id) => ({
  type: "APPROVE_PRODUCT",
  payload: { id },
});

export const rejectProduct = (id) => ({
  type: "REJECT_PRODUCT",
  payload: { id },
});

export const showModal = () => ({
  type: "SHOW_MODAL",
});

export const hideModal = () => ({
  type: "HIDE_MODAL",
});

export const selectProduct = (product) => ({
  type: "SELECT_PRODUCT",
  payload: product,
});

export const increaseQuantity = (productId) => ({
  type: "INCREASE_QUANTITY",
  payload: { productId },
});

export const decreaseQuantity = (productId) => ({
  type: "DECREASE_QUANTITY",
  payload: { productId },
});

export const sendChanges = () => ({
  type: "SEND_CHANGES",
});

export const cancelChanges = () => ({
  type: "CANCEL_CHANGES",
});
