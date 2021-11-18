import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sibebarReducer from "./sidebar-reducer";
import usersReducer from "./Users-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sibebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;