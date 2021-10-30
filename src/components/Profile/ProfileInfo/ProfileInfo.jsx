import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://pxwall.com/wp-content/uploads/2019/04/4K-Nature-Photo.jpg'></img>
            </div>
            <div className={styles.item}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;