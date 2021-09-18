import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const LOADING_AJAX_isFeTCHING = 'LOADING-AJAX-isFeTCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS';


let firstInitialState = {
    usersArray: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetchingPreloader: false,
    followingProgressIdArray: [],
    fake: 5
};

const usersPageReduser = (state = firstInitialState, action) => {

    switch (action.type) {
        case 'FAKE':
            return {...state, fake: state.fake + 1};
        case FOLLOW: {
            debugger
            return {
                ...state,
// usersArray: [...state.usersArray],
                usersArray: state.usersArray.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            };
        }
//         case UNFOLLOW: {
//             return {
//                 ...state,
// // usersArray: [...state.usersArray],
//                 usersArray: state.usersArray.map((user) => {
//                     if (user.id === action.id) {
//                         return {...user, followed: false}
//                     }
//                     return user;
//                 })
//             };
//         }
        case SET_USERS: {
            // console.log('OK OK')
            return {
                ...state,
                usersArray: [...action.users]
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case LOADING_AJAX_isFeTCHING: {
            return {
                ...state,
                isFetchingPreloader: action.isFetchingPreloader
            }
        }

        case FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgressIdArray:
                    (action.isFetchingFollowing)
                        ? [...state.followingProgressIdArray, action.id]
                        : [...state.followingProgressIdArray.filter(id => id !== action.id)]
            }
        }

        default:
            return state;
    }
};


// экспорт ActionCreator-ов

export const followFriend = (id) => ({type: FOLLOW, id});

// export const unfollowFriend = (id) => ({type: UNFOLLOW, id});

export const setUsersFromServer = (users) => ({type: SET_USERS, users});

export const setPage = (currentPage) => ({type: SET_PAGE, currentPage});

export const setTotalCount = (totalCount23) => ({type: SET_TOTAL_COUNT, totalCount: totalCount23});

export const toggleIsFetching = (isFetching) => ({type: LOADING_AJAX_isFeTCHING, isFetchingPreloader: isFetching});

export const toggleFollowingProgress = (isFetching2, id) => ({
    type: FOLLOWING_PROGRESS, isFetchingFollowing: isFetching2, id: id
});


// экспорт ThunkCreator-ов

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispacth) => {

    dispacth(toggleIsFetching(true));
    dispacth(setPage(currentPage));

    let response1 = await usersAPI.getUsers(currentPage, pageSize);
    dispacth(setUsersFromServer(response1.data.items));
    dispacth(setTotalCount(response1.data.totalCount));

    dispacth(toggleIsFetching(false));
};


// export const unfollowThunkCreator = (userID) => async (dispacth) => {
//
//     dispacth(toggleFollowingProgress(true, userID));
//
//     let response2 = await usersAPI.unfollowUser(userID);
//     if (response2.data.resultCode === 0) {
//         dispatch(unfollowFriend(userID));
//     }
//
//     dispacth(toggleFollowingProgress(false, userID));
//
// };

// export const followThunkCreator = (userID) => async (dispacth) => {
//
//     dispacth(toggleFollowingProgress(true, userID));
//
//     let response3 = await usersAPI.followUser(userID);
//     if (response3.data.resultCode === 0) {
//         dispacth(followFriend(userID));
//     }
//
//     dispacth(toggleFollowingProgress(false, userID));
//
//
// };

export const followUnfollowThunkCreator = (userID, string) => async (dispacth) => {
    debugger
    dispacth(toggleFollowingProgress(true, userID));
    debugger
    let response3 = await usersAPI[string](userID);
    if (response3.data.resultCode === 0) {
        dispacth(followFriend(userID));
    }
    debugger
    dispacth(toggleFollowingProgress(false, userID));
    debugger

};

export default usersPageReduser;