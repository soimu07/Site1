
export const registerUserAction = async (email, password, passwordVerify, dispatch, history) => {
const {status, data} =  await registerUser(email,password, passwordVerify);
switch (status) {
    case 200:
        dispatch({
            type:'REGISTER_USER_SUCCESS',
            payload:{accessToken:data.accessToken}
        })
        history.push('/products')
        break;
    default: 
            history.push('/error')
        break;
}
}

const registerUser = async (email, password, passwordVerify) => {
    const url = 'https://zipper-test-backend.herokuapp.com/signup'
    const body = {
        email,
        password,
        repeatPassword: passwordVerify
    }
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
}

export const loginUserAction = async (email, password, dispatch, history) => {
    const {status, data} = await loginUser(email, password);
    switch (status) {
        case 200:
            dispatch({
                type:'REGISTER_USER_SUCCESS',
                payload:{accessToken:data.accessToken}
            })
            history.push('/products')
            break;
        default: 
                history.push('/error')

            break;
    }
} 

 const loginUser = async (email, password) => {
    const url = 'https://zipper-test-backend.herokuapp.com/signin'
    const body = {
        email,
        password
    }
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON 
    
}

export const getProductsAction = async (accessToken, dispatch, history) => {
    const {status, data} = await getProducts(accessToken);
    switch (status) {
        case 200:
            dispatch({
                type:'GET_PRODUCTS_SUCCESS',
                payload:{products:data.rows}
            })
            break;
        default: 
                history.push('/error')

            break;
    }
}

const getProducts = async(accessToken) => {
    const url = 'https://zipper-test-backend.herokuapp.com/products?limit=50&offset=0'
    const response = await fetch(url, {
        headers: new Headers({
            'Authorization': `Bearer ${accessToken}`, 
            'Content-Type': 'application/json'
        }), 
    })
    return response.json()

}
export const logOutUserAction = () => {
    return ({
        type:'LOG_OUT_USER'
    })
}
