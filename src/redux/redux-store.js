import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sibebarReducer from "./sidebar-reducer";
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sibebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;