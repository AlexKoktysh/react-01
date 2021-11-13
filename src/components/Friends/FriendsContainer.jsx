import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Friends from './Friends'

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = () => {
    return {

        }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Friends)