import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'My name is Sasha', likeCounts: '26'},
                {id: 1, message: 'I am from Belarus', likeCounts: '2'}
            ],
            onChangePost: 'it-kamasutra'
        },
        sideBar: {
            friends: [
                {name: 'Sveta'},
                {name: 'Sasha'},
                {name: 'Ira'}
            ]
        }
    },
    _callSubscriber() {
        alert('State change')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;