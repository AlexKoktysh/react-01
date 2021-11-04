import React from "react";
import userPhoto from './../../assets/images/userPhoto.png'
import styles from './Users.module.css'

let Users = (props) => {
    let pagesCount = Math.ceil(props.props.totalUsersCount / props.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    return (
        <div>
            <div className={styles.page}>
                {pages.map(p => {
                    return <span className={props.props.currentPage === p && styles.selectedPage}
                    onClick = {() => {props.onPageChange(p)}}>{p}</span>
                })}
            </div>
            <div className={styles.users}>
                {props.props.users.map(user => 
                    <div key={user.id} className={styles.wrapper}>
                        <div>
                            <div>
                                <img src={user.photos.small !=null 
                                    ? user.photos.small 
                                    : userPhoto} className={styles.avatar} />
                            </div>
                            <div>
                                {user.follow 
                                ? <button onClick={() => {props.props.follow(user.id)}}>UnFollow</button> 
                                : <button onClick={() => {props.props.unFollow(user.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div className={styles.name}>
                                {user.name}
                            </div>
                            <div>
                                {user.status}
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
                    </div>)}
            </div>
        </div>
    );
}

export default Users