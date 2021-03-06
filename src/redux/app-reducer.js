import { getMe } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'SAMURAI-NETWORK/APP/INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getMe())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer