import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import styles from './Users.module.css'

let Users = ({currentPage, onPageChange, totalUsersCount, pageSize, ...props}) => {
    return (
        <div>
            <Paginator  currentPage={currentPage} 
                        onPageChange={onPageChange} 
                        totalUsersCount={totalUsersCount} 
                        pageSize={pageSize} />
            <div className={styles.users}>
                {props.users.map(user => 
                    <User   user={user} 
                            key={user.id} 
                            className={styles.wrapper} 
                            followingIsProgress={props.followingIsProgress} 
                            follow={props.follow} 
                            unfollow={props.unfollow} />
                )}
            </div>
        </div>
    );
}

export default Users