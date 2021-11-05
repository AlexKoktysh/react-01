const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Ira'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Dima'}
    ],
    messagesData: [
        {id: 1, message: 'Hello, World!'},
        {id: 2, message: 'My name is Sasha'}
    ],
    newMessageData: 'Hello, World!!!'
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        messagesData: [...state.messagesData]
    }
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 3, message: state.newMessageData}],
                newMessageData: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageData: action.textMessage
            }
        default:
            return state;
    }
}

export const addMessage = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const onMessageChange = (textMessage) => {
    return {
        type: UPDATE_MESSAGE_TEXT, 
        textMessage: textMessage 
    }
}

export default dialogsReducer;