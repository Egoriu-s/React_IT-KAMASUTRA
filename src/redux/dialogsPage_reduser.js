const SEND_MESSAGE_STATE = 'SEND-MESSAGE-STATE';
const NEW_MESSAGE_STATE = 'NEW-MESSAGE-STATE';

let firstInitialState = {
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
};

const dialogsPageReduser = (state = firstInitialState, action) => {


    switch (action.type) {

        case SEND_MESSAGE_STATE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            return {
                ...state,
                messagesArray: [...state.messagesArray, newMessage],
                newMessageText: ''
            };

        case NEW_MESSAGE_STATE:
            return {
                ...state,
                newMessageText: action.messageText
            };

        default:
            return state;
    }
};

export default dialogsPageReduser;

export const addMessageStateActionCreator = () => ({type: SEND_MESSAGE_STATE});

export const newMessageStateActionCreator = (text) => ({type: NEW_MESSAGE_STATE, messageText: text});


// if (action.type === SEND_MESSAGE_STATE) {
//     let newMessage = state.newMessageText;
//     state.messagesArray.push({id: 4, message: newMessage});
//     state.newMessageText = '';
//
// } else if (action.type === NEW_MESSAGE_STATE) {
//     state.newMessageText = action.messageText;
// }
// return state;