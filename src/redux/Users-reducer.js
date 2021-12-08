import { userAPI } from "../API/api"

const FOLLOW = 'SAMURAI-NETWORK/USER/FOLLOW'
const UNFOLLOW = 'SAMURAI-NETWORK/USER/UNFOLLOW'
const SET_USERS = 'SAMURAI-NETWORK/USER/SET_USERS'
const SET_CURRENT_PAGE = 'SAMURAI-NETWORK/USER/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SAMURAI-NETWORK/USER/SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'SAMURAI-NETWORK/USER/TOOGLE_IS_FETCHING'
const TOOGLE_FOLLOWING_PROGRESS = 'SAMURAI-NETWORK/USER/TOOGLE_FOLLOWING_PROGRESS'

let initialState = {
    usersPage: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingIsProgress: []
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
                usersPage: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            } 
        case TOOGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingIsProgress: action.isFetching
                ? [...state.followingIsProgress, action.userId]
                : state.followingIsProgress.filter(id => id !== action.userId)
            } 
        default:
            return state;
    } 
}

export const followAccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const unFollowAccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}

export const toogleIsFetching = (isFetching) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching
    }
}

export const toogleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOOGLE_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toogleIsFetching(true))
        let response = await userAPI.getUsers(currentPage, pageSize)
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
    }
}

export const changePage = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(toogleIsFetching(true))
        let response = await userAPI.getUsers(pageNumber, pageSize)
                dispatch(toogleIsFetching(false))
                dispatch(setUsers(response.items))
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCretor) => {
    dispatch(toogleFollowingProgress(true, userId))
        let response = await apiMethod(userId)
            if (response.resultCode === 0) {
                dispatch(actionCretor(userId))
            }
            dispatch(toogleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.deleteFollow.bind(userAPI), followAccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.postFollow.bind(userAPI), unFollowAccess)
    }
}

export default usersReducer;