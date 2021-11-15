import { userAPI } from "../API/api"

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
    {id: 1, message: 'My name is Sasha', likeCounts: '26'},
    {id: 1, message: 'I am from Belarus', likeCounts: '2'}
    ],
    onChangePost: 'it-kamasutra',
    profile: null,
    status: 'Hello, World!'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, message: state.onChangePost, likeCounts: 0}],
                onChangePost: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                onChangePost: action.textPost
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}
export const onPostChange = (textPost) => {
    return {
        type: UPDATE_POST_TEXT, 
        textPost: textPost 
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
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

export default profileReducer;