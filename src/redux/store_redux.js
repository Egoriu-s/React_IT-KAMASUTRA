import profilePageReduser from "./profilePage_reduser";
import dialogsPageReduser from "./dialogsPage_reduser";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import friendsPageReduser from "./friendsPage_reduser";
import usersPageReduser from "./usersPage_reduser";
import authReduser from "./auth_reduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReduser} from 'redux-form';
import appReducer from "./app_reducer";


let reducers = combineReducers({
    profilePage: profilePageReduser,
    dialogsPage: dialogsPageReduser,
    friendsPage: friendsPageReduser,
    usersPage: usersPageReduser,
    auth: authReduser,
    form: formReduser,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//     - const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...middleware)
// ));

window.__store__ = store;
window.U = store.usersPage;

export default store;