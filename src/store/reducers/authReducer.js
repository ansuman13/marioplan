const initialState = {

    authError: null

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError:null
             }
    
        case 'SIGNOUT_SUCCESS':
            console.log('signout successful')
            return state

        case 'SIGNOUT_ERROR':
            console.log('signout failed')
            return state

        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return state
        
        case 'SIGNUP_ERROR':
            console.log('signup failed', action.err)
            return {
                ...state,
                authError:action.err
            }

        default:
            return state;
    }
}

export default authReducer;