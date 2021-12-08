import { userAPI } from "../API/api"

const ADD_POST = 'SAMURAI-NETWORK/PROFILE/ADD-POST'
const SET_USER_PROFILE = 'SAMURAI-NETWORK/PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'SAMURAI-NETWORK/PROFILE/SET_STATUS'

let initialState = {
    postsData: [
    {id: 1, message: 'My name is Sasha', likeCounts: '26'},
    {id: 1, message: 'I am from Belarus', likeCounts: '2'}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, message: action.post, likeCounts: 0}],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await userAPI.getUserProfile(userId)
            dispatch(setUserProfile(response))
        }
}

export const getStatus = (userId) => {
    return  async (dispatch) => {
        let response = await userAPI.getStatus(userId)
            dispatch(setStatus(response))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await userAPI.updateStatus(status)
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
        }
}

export default profileReducer;