import { userAPI } from "../API/api"

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
        // case UPDATE_POST_TEXT:
        //     return {
        //         ...state,
        //         onChangePost: action.textPost
        //     }
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
// export const onPostChange = (textPost) => {
//     return {
//         type: UPDATE_POST_TEXT, 
//         textPost: textPost 
//     }
// }
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
    return (dispatch) => {
        userAPI.getUserProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        userAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        userAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;