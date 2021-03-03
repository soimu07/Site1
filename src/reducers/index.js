const initialState = {
    accessToken: null,
    products: [],
    productsOffset: 0,
    productsLimit: 12,
    productsTotal: 0
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
                products:state.products.concat(action.payload.products),
                productsTotal:action.payload.productsTotal,
                productsOffset:action.payload.productsOffset
            }    
        case 'LOG_OUT_USER':
            return initialState
        default:
            return state;
    }
}

export default rootReducer;