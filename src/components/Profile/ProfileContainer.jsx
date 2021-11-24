import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { authRedirectHOC } from '../HOC/authRedirectHOC';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    authRedirectHOC
)(ProfileContainer)
