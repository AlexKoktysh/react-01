import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div>
            <div>
                <img src='https://pxwall.com/wp-content/uploads/2019/04/4K-Nature-Photo.jpg'></img>
            </div>
            <div className={styles.item}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;