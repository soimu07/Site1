const initialState = {
    accessToken: null,
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER_SUCCESS':
            const newState = {
                accessToken: action.payload.accessToken
            }
            return newState;
        default:
            return state;
    }
}

export default rootReducer;