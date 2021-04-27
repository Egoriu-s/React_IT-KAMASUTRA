const ADD_POST_STATE = 'ADD-POST-STATE';
const NEW_POST_STATE = 'NEW-POST-STATE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let firstInitialState = {
    profileInfo: {
        background: 'https://s1.1zoom.ru/b5050/828/289304-Sepik_1920x1200.jpg',
        avatar: 'https://sun9-40.userapi.com/impg/O8UmZl2_HNqqHHTLXe_BAiVfl3DLEBtUVmad5w/h9r5N8hp7CU.jpg?size=768x1024&quality=96&proxy=1&sign=6476acdea0ddb1062fc2766f55e8066a&type=album'
    },
    postsArray: [
        {id: 1, message: 'Hi, how are you?', like: '+100500'},
        {id: 2, message: 'It\'s my second post!', like: '20'},
        {id: 3, message: 'Good day!', like: '25'}
    ],
    newPostText: 'IT-KAMASUTRA',
    usersProfile: null
};

const profilePageReduser = (state = firstInitialState, action) => {

        switch (action.type) {

            case ADD_POST_STATE: {

                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    like: 0
                };
                return {
                    ...state,
                    postsArray: [...state.postsArray, newPost],
                    newPostText: ''
                };

            }

            case NEW_POST_STATE: {
                return {
                    ...state,
                    newPostText: action.newPostText
                };
            }

            case SET_USER_PROFILE: {
                return {
                    ...state,
                    usersProfile: action.usersProfile
                }
            }

            default:
                return state;
        }
    }
;

// Action Creator-ы

export const addPostStateActionCreator = () => ({type: ADD_POST_STATE});

export const newPostStateActionCreator = (newPostText) => ({type: NEW_POST_STATE, newPostText: newPostText});

export const setProfileOfUser = (usersProfile) => ({type: SET_USER_PROFILE, usersProfile: usersProfile});

export default profilePageReduser;


// if (action.type === ADD_POST_STATE) {
//     let newPost2 = state.newPostText;
//     state.postsArray.push({id: 4, message: newPost2, like: 0});
//     state.newPostText = ''; // очистка поля textarea после нажатия и добавления поста
// } else if (action.type === NEW_POST_STATE) {
//     state.newPostText = action.newText;
// }
// return state;