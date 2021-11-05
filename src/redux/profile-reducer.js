const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
    postsData: [
    {id: 1, message: 'My name is Sasha', likeCounts: '26'},
    {id: 1, message: 'I am from Belarus', likeCounts: '2'}
    ],
    onChangePost: 'it-kamasutra'
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
        default:
            return state;
    }
}

export const addPost = () => {
    return {
        type: 'ADD-POST'
    }
}
export const onPostChange = (textPost) => {
    return {
        type: 'UPDATE-POST-TEXT', 
        textPost: textPost 
    }
}

export default profileReducer;