const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    usersPage: [
    //     {id: '1', userName: 'Sasha', userStatus: 'My name is Sasha', 
    //     userCountry: 'Belarus', userCity: 'Minsk', follow: true, 
    //     userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE84xssgYl80Fen_wbkc33X01DCzGkXAxh6g&usqp=CAU'},
    //     {id: '2', userName: 'Viktor', userStatus: 'My name is Viktor', 
    //     userCountry: 'Russia', userCity: 'Moskow', follow: false, 
    //     userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE84xssgYl80Fen_wbkc33X01DCzGkXAxh6g&usqp=CAU'},
    //     {id: '3', userName: 'Igor', userStatus: 'My name is Igor', 
    //     userCountry: 'Ukraine', userCity: 'Kiev', follow: true, 
    //     userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE84xssgYl80Fen_wbkc33X01DCzGkXAxh6g&usqp=CAU'}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                usersPage: state.usersPage.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersPage: state.usersPage.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                usersPage: [...state.usersPage, ...action.users]
            }    
        default:
            return state;
    } 
}

export const followActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const unFollowActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;