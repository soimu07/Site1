
export const registerUserAction = async (email, password, passwordVerify, dispatch, history) => {
console.log(password, passwordVerify, email)
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
