import {authMe} from "./auth_reduser";

const SET_INITIALIZE = 'SET-INITIALIZE';

let firstInitialState = {
    initialize: false
};

const appReducer = (state = firstInitialState, action) => {

    switch (action.type) {

        case SET_INITIALIZE:
            return {
                ...state,
                initialize: action.initialize
            };

        default:
            return state;
    }
};


// Action Creator-ы

export const initializeSuccess = (initialize) => ({type: SET_INITIALIZE, initialize: initialize});


// Thunk Creator-ы

export const initializeApp = () => {
    return (dispatch) => {
        let dispatchResultPromise = dispatch(authMe());
        // debugger
        dispatchResultPromise.then(() => {
            dispatch(initializeSuccess(true));
        })
    }
};


export default appReducer;