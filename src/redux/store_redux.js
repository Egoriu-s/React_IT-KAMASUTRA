import profilePageReduser from "./profilePage_reduser";
import dialogsPageReduser from "./dialogsPage_reduser";
import {combineReducers, createStore} from "redux";
import friendsPageReduser from "./friendsPage_reduser";
import usersPageReduser from "./usersPage_reduser";
import authReduser from "./auth_reduser";


let redusers = combineReducers({
    profilePage: profilePageReduser,
    dialogsPage: dialogsPageReduser,
    friendsPage: friendsPageReduser,
    usersPage: usersPageReduser,
    auth: authReduser
});

let store = createStore(redusers);

window.store = store;

export default store;