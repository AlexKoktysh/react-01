import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (textMessage) => {
            dispatch(updateMessageTextActionCreator(textMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;