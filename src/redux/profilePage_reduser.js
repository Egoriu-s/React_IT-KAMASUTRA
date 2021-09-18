import {profileAPI} from "../api/api";

const ADD_POST_STATE = 'ADD-POST-STATE';
const GET_USER_PROFILE = 'GET-USER-PROFILE';
const GET_USER_PROFILE_STATUS = 'GET-USER-PROFILE-STATUS';
const DELETE_POST_STATE = 'DELETE-POST-STATE';

let firstInitialState = {

    postsArray: [
        {id: 1, post: 'Hi, how are you?', like: '+100500'},
        {id: 2, post: 'It\'s my second post!', like: '20'},
        {id: 3, post: 'Good day!', like: '25'}
    ],
    usersProfile: null,
    status: null
};

const profilePageReduser = (state = firstInitialState, action) => {

    switch (action.type) {

        case ADD_POST_STATE: {

            let newPost = {
                id: 4,
                // message: state.newPostText,
                post: action.post,
                like: 0
            };
            return {
                ...state,
                postsArray: [...state.postsArray, newPost],
                newPostText: ''
            };

        }

        case DELETE_POST_STATE: {
            return {
                ...state,
                postsArray: [...state.postsArray.filter(el => el.id !== action.id)]
            }
        }

        case GET_USER_PROFILE: {
            return {
                ...state,
                usersProfile: action.usersProfile
            }
        }

        case GET_USER_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
};


// Action Creator-ы

export const addPostStateActionCreator = (post) => ({type: ADD_POST_STATE, post: post});

export const deletePostStateActionCreator = (id) => ({type: DELETE_POST_STATE, id: id});

export const setUserProfile = (usersProfile) => ({type: GET_USER_PROFILE, usersProfile: usersProfile});

export const setUserProfileStatus = (statusText) => ({type: GET_USER_PROFILE_STATUS, status: statusText});


// Thunk Creator-ы

export const getProfileThunkCreator = (userId) => async (dispacth) => {
    let response1 = await profileAPI.getProfile(userId);
    dispacth(setUserProfile(response1.data));
};

export const getStatusThunkCreator = (userId) => async (dispacth) => {
    let response2 = await profileAPI.getProfileStatus(userId);
    dispacth(setUserProfileStatus(response2.data))
};

export const updateStatusThunkCreator = (statusText) => async (dispacth) => {
    let response3 = await profileAPI.updateProfileStatus(statusText);
    if (response3.data.resultCode === 0) {
        dispacth(setUserProfileStatus(statusText));
    }
};


export default profilePageReduser;
