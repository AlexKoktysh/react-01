import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile} status={props.status} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;