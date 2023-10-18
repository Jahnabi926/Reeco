import mockData from "../MOCK_DATA.json";

const initialState = {
  data: mockData,
  showModal: false,
  selectedProduct: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPROVE_PRODUCT":
      return {
        ...state,
        data: state.data.map((item) => {
          // eslint-disable-next-line eqeqeq
          if (item.id == action.payload.id) {
            return {
              ...item,
              status: "Approved",
            };
          }
          return item;
        }),
      };
    case "REJECT_PRODUCT":
      return {
        ...state,
        data: state.data.map((item) => {
          // eslint-disable-next-line eqeqeq
          if (item.id == action.payload.id) {
            return {
              ...item,
              status: "Missing",
            };
          }
          return item;
        }),
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: true,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false,
      };
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        selectedProduct: {
          ...state.selectedProduct,
          quantity: state.selectedProduct.quantity + 1,
          total:
            state.selectedProduct.price * (state.selectedProduct.quantity + 1),
        },
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        selectedProduct: {
          ...state.selectedProduct,
          quantity: state.selectedProduct.quantity - 1,
          total:
            state.selectedProduct.price * (state.selectedProduct.quantity - 1),
        },
      };
    case "SEND_CHANGES":
      return {
        ...state,
        data: state.data.map((item) => {
          // eslint-disable-next-line eqeqeq
          if (item.id == state.selectedProduct.id) {
            return {
              ...state.selectedProduct,
            };
          }
          return item;
        }),
        showModal: false,
      };
    case "CANCEL_CHANGES":
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
