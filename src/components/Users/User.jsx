import React from "react";
import userPhoto from './../../assets/images/userPhoto.png';
import { NavLink } from "react-router-dom";
import styles from './Users.module.css'

const User = (props) => {
    return (
        <div>
            <div>
                <NavLink to={`/profile/${props.user.id}`}>
                <img src={props.user.photos.small !=null 
                    ? props.user.photos.small 
                    : userPhoto} className={styles.avatar} />
                </NavLink>
                <div>
                    {props.user.follow
                    ? <button 
                        disabled={props.followingIsProgress.some(id => id === props.user.id)} 
                        onClick={() => {
                            props.follow(props.user.id)
                        }}>UnFollow</button> 
                    : <button 
                        disabled={props.followingIsProgress.some(id => id === props.user.id)}
                        onClick={() => {
                            props.unfollow(props.user.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div>
                <div className={styles.name}>
                    {props.user.name}
                </div>
                <div>
                    {props.user.status}
                </div>
            </div>
            <div>
                <div>
                    'user.userCountry'
                </div>
                <div>
                    'user.userCity'
                </div>
            </div>
        </div>
    )
}

export default User