import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css'
import userPhoto from './../../assets/images/userPhoto.png'

class Users extends React.Component {
    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
            })
    }
    
    render() {
        return (
            <div>
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
        );
    }
}



// const Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items)
//             })
//         }
//     }
//     return (
//         <div>
//             <button onClick={getUsers}>GET USERS</button>
//             {props.users.map(user => 
//                 <div key={user.id} className={styles.wrapper}>
//                     <div>
//                         <div>
//                             <img src={user.photos.small !=null 
//                                 ? user.photos.small 
//                                 : userPhoto} className={styles.avatar} />
//                         </div>
//                         <div>
//                             {user.follow 
//                             ? <button onClick={() => {props.follow(user.id)}}>UnFollow</button> 
//                             : <button onClick={() => {props.unFollow(user.id)}}>Follow</button>}
//                         </div>
//                     </div>
//                     <div>
//                         <div className={styles.name}>
//                             {user.name}
//                         </div>
//                         <div>
//                             {user.status}
//                         </div>
//                     </div>
//                     <div>
//                         <div>
//                             'user.userCountry'
//                         </div>
//                         <div>
//                             'user.userCity'
//                         </div>
//                     </div>
//                 </div>)}
//         </div>
//     );
// }

export default Users;