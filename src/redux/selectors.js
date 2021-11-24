export const getUsersGet = (state) => {
    return (
        state.usersPage.usersPage
    )
}

export const getPageSize = (state) => {
    return (
        state.usersPage.pageSize
    )
}

export const getTotalUsersCount = (state) => {
    return (
        state.usersPage.totalUsersCount
    )
}

export const getCurrentPage = (state) => {
    return (
        state.usersPage.currentPage
    )
}

export const getIsFetching = (state) => {
    return (
        state.usersPage.isFetching
    )
}

export const getFollowingIsProgress = (state) => {
    return (
        state.usersPage.followingIsProgress
    )
}