import profilePageReduser from "./profilePage_reduser";
import dialogsPageReduser from "./dialogsPage_reduser";
import friendsPageReduser from "./friendsPage_reduser";

let store = {

    _state: {
        profilePage: {
            profileInfo: {
                background: 'https://s1.1zoom.ru/b5050/828/289304-Sepik_1920x1200.jpg',
                avatar: 'https://sun9-40.userapi.com/impg/O8UmZl2_HNqqHHTLXe_BAiVfl3DLEBtUVmad5w/h9r5N8hp7CU.jpg?size=768x1024&quality=96&proxy=1&sign=6476acdea0ddb1062fc2766f55e8066a&type=album'
            },
            postsArray: [
                {id: 1, message: 'Hi, how are you?', like: '+100500'},
                {id: 2, message: 'It\'s my second post!', like: '20'},
                {id: 3, message: 'Good day!', like: '25'}
            ],
            newPostText: 'IT-KAMASUTRA'
        },
        dialogsPage: {
            dialogsArray: [
                {id: 1, name: 'Egorius'},
                {id: 2, name: 'Vika'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Kuzya'}
            ],
            messagesArray: [
                {id: 1, message: 'Hello, Universe!'},
                {id: 2, message: 'How old are you?'},
                {id: 3, message: 'I love React!'}
            ],
            newMessageText: 'IT-KAMASUTRA'
        },
        friendsPage: {
            friendsArray: [
                {id: 1, name: 'Egorius'},
                {id: 2, name: 'Vika'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Kuzya'}
            ]
        }
    },
    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReduser(this._state.dialogsPage, action);
        this._state.friendsPage = friendsPageReduser(this._state.friendsPage, action);
        this._rerenderEntireTree(this._state);
    }
};

// export const addPostStateActionCreator = () => {
//     return {type: ADD_POST_STATE}
// };

window.store = store;

export default store;