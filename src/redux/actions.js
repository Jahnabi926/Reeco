export const approveProduct = (id) => ({
  type: "APPROVE_PRODUCT",
  payload: { id },
});

export const rejectProduct = (id, status) => ({
  type: "REJECT_PRODUCT",
  payload: { id, status },
});

export const showEditModal = () => ({
  type: "SHOW_EDIT_MODAL",
});

export const hideEditModal = () => ({
  type: "HIDE_EDIT_MODAL",
});

export const showMissingModal = () => ({
  type: "SHOW_MISSING_MODAL",
});

export const hideMissingModal = () => ({
  type: "HIDE_MISSING_MODAL",
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
