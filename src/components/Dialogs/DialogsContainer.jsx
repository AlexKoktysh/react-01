import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage } from '../../redux/dialogs-reducer';
import { authRedirectHOC } from '../HOC/authRedirectHOC';
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    authRedirectHOC
)(Dialogs)