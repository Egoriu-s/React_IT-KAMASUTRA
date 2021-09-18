import {createSelector} from "reselect";

export const getUsersArray = (state) => {
    return state.usersPage.usersArray
}

export const getUsersArraySelector = (state) => {
    return state.usersPage.usersArray.filter(u => true)
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getIsFetchingPreloader = (state) => {
    return state.usersPage.isFetchingPreloader
}

export const getFollowingProgressIdArray = (state) => {
    return state.usersPage.followingProgressIdArray
}

export const getUsersArraySuperSelector = createSelector(getUsersArray, getTotalCount,
    (usersArray1, totalCount) => {
        return usersArray1.filter(u => true)
    });