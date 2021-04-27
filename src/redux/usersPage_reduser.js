const FOLLOW = 'FOLLOW-FRIEND';
const UNFOLLOW = 'UNFOLLOW-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const LOADING_AJAX_isFeTCHING = 'LOADING-AJAX-isFeTCHING';

let firstInitialState = {
    // usersArray: [
    //     {
    //         id: 1,
    //         followed: true,
    //         foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
    //         name: 'Egorius',
    //         status: 'I like football',
    //         city: 'LA'
    //     },
    //     {
    //         id: 2,
    //         followed: false,
    //         foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
    //         name: 'Sveta',
    //         status: 'I like ice cream',
    //         city: 'Moscow'
    //     },
    //     {
    //         id: 3,
    //         followed: false,
    //         foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
    //         name: 'Andrey',
    //         status: 'I like computer games',
    //         city: 'Orel'
    //     },
    //     {
    //         id: 4,
    //         followed: true,
    //         foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
    //         name: 'Olya',
    //         status: 'I like pizza',
    //         city: 'SPb'
    //     },
    //     {
    //         id: 5,
    //         followed: true,
    //         foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
    //         name: 'Alina',
    //         status: 'I like summer',
    //         city: 'Tula'
    //     }
    // ]
    usersArray: [],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersPageReduser = (state = firstInitialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
// usersArray: [...state.usersArray],
                usersArray: state.usersArray.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
// usersArray: [...state.usersArray],
                usersArray: state.usersArray.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        }
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
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};

// экспорт ActionCreator-ов

export const followFriend = (id) => ({type: FOLLOW, id});

export const unfollowFriend = (id) => ({type: UNFOLLOW, id});

export const setUsersFromServer = (users) => ({type: SET_USERS, users});

export const setPage = (currentPage) => ({type: SET_PAGE, currentPage});

export const setTotalCount = (totalCount23) => ({type: SET_TOTAL_COUNT, totalCount: totalCount23});

export const setIsFetching = (isFetching23) => ({type: LOADING_AJAX_isFeTCHING, isFetching: isFetching23});

export default usersPageReduser;