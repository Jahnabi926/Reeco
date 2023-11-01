import mockData from "../MOCK_DATA.json";

const initialState = {
  data: mockData,
  showEditModal: false,
  showMissingModal: false,
  selectedProduct: null,
  filteredProducts: [],
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
              status: action.payload.status,
            };
          }
          return item;
        }),
      };

    case "SHOW_EDIT_MODAL":
      return {
        ...state,
        showEditModal: true,
      };

    case "HIDE_EDIT_MODAL":
      return {
        ...state,
        showEditModal: false,
      };

    case "SHOW_MISSING_MODAL":
      return {
        ...state,
        showMissingModal: true,
      };

    case "HIDE_MISSING_MODAL":
      return {
        ...state,
        showMissingModal: false,
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
      if (state.showEditModal) {
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
          showEditModal: false,
        };
      } else if (state.showMissingModal) {
        return {
          ...state,
          showMissingModal: false,
        };
      }
      return state;

    case "CANCEL_CHANGES":
      if (state.showEditModal) {
        return {
          ...state,
          showEditModal: false,
        };
      } else if (state.showMissingModal) {
        return {
          ...state,
          showMissingModal: false,
        };
      }
      return state;

    case "ADD_PRODUCT":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "SEARCH_PRODUCT":
      const searchQuery = action.payload.toLowerCase();
      const filteredProducts = state.data.filter((product) =>
        product.product_name.toLowerCase().includes(searchQuery)
      );
      return {
        ...state,
        filteredProducts,
      };

    default:
      return state;
  }
};

export default reducer;
