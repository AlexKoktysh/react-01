import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css'
import userPhoto from './../../assets/images/userPhoto.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageSize) => {
        this.props.setCurrentPage(pageSize)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageSize}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            })
    }
    
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div className={styles.page}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && styles.selectedPage}
                        onClick = {() => {this.onPageChange(p)}}>{p}</span>
                    })}
                </div>
                <div className={styles.users}>
                    {this.props.users.map(user => 
                        <div key={user.id} className={styles.wrapper}>
                            <div>
                                <div>
                                    <img src={user.photos.small !=null 
                                        ? user.photos.small 
                                        : userPhoto} className={styles.avatar} />
                                </div>
                                <div>
                                    {user.follow 
                                    ? <button onClick={() => {this.props.follow(user.id)}}>UnFollow</button> 
                                    : <button onClick={() => {this.props.unFollow(user.id)}}>Follow</button>}
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
}

export default Users;