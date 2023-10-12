import mockData from "../MOCK_DATA.json"

const initialState = {
    data: mockData,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "APPROVE_PRODUCT": 
        return {
            ...state,
            data: state.data.map((item) => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        status: "Approved"
                    }
                }
                return item;
            })
        };
        case "REJECT_PRODUCT": 
        return {
            ...state,
            data: state.data.map((item) => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        status: "Missing Product",
                    }
                }
                return item;
            })
        };
        default: return state;
    }
};

export default reducer;