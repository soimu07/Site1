const initialState = {
    accessToken: null,
    products: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER_SUCCESS':
            return {
                ...state,
                accessToken: action.payload.accessToken
            }
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                products:action.payload.products
            }    
        case 'LOG_OUT_USER':
            return initialState
        default:
            return state;
    }
}

export default rootReducer;