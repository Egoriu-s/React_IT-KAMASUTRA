import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth_reducer/SET-USER-DATA';

let firstInitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReduser = (state = firstInitialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };

        default:
            return state;
    }
};


// Action Creator-ы

export const setUserData = (id, email, login, isAuth) => ({
        type: SET_USER_DATA, data: {
            id: id,
            email: email,
            login: login,
            isAuth: isAuth
        }
    }
);


// Thunk Creator-ы

// export const authMe = () => {
//     return (dispacth) => {
//         authAPI.setAuthMe().then(data => {
//             if (data.resultCode === 0) {
//                 let {id, email, login} = data.data;
//                 dispacth(setUserData(id, email, login, true));
//             }
//         });
//     };
// }

export const authMe = () => async (dispacth) => {
    let response1 = await authAPI.setAuthMe();
    if (response1.data.resultCode === 0) {
        let {id, email, login} = response1.data.data;
        dispacth(setUserData(id, email, login, true));
    }
};


export const authlogin = (email, password, rememberMe) => async (dispacth) => {
    let response2 = await authAPI.authLogin(email, password, rememberMe);
    if (response2.data.resultCode === 0) {
        dispacth(authMe());
    } else {
        let errorLoginMessage = response2.data.messages.length > 0
            ? response2.data.messages[0]
            : 'Some error';
        dispacth(stopSubmit('login', {_error: errorLoginMessage}));
    }
};

export const authlogout = () => async (dispacth) => {
    let response3 = await authAPI.authLogout();
    if (response3.data.resultCode === 0) {
        dispacth(setUserData(null, null, null, false))
    }
};

export default authReduser;