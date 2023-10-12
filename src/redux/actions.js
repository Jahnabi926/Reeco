export const approveProduct = (id) => ({
  type: "APPROVE_PRODUCT",
  payload: { id },
});

export const rejectProduct = (id) => ({
  type: "REJECT_PRODUCT",
  payload: { id },
});
