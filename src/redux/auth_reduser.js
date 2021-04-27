const SET_USER_DATA = 'SET-USER-DATA';
const NO_SET_USER_DATA = 'NO-SET-USER-DATA';
const LOADING_AJAX_isFeTCHING = 'LOADING-AJAX-isFeTCHING';

let firstInitialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false
};

const authReduser = (state = firstInitialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };

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

// Action Creator-ы

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id: id, email: email, login: login}});

export const setIsFetching = (isFetching23) => ({type: LOADING_AJAX_isFeTCHING, isFetching: isFetching23});

export default authReduser;


// if (action.type === ADD_POST_STATE) {
//     let newPost2 = state.newPostText;
//     state.postsArray.push({id: 4, message: newPost2, like: 0});
//     state.newPostText = ''; // очистка поля textarea после нажатия и добавления поста
// } else if (action.type === NEW_POST_STATE) {
//     state.newPostText = action.newText;
// }
// return state;