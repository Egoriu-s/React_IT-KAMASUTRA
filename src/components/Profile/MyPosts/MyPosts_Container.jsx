import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostStateActionCreator, newPostStateActionCreator} from "../../../redux/profilePage_reduser";


let mapStateToProps = (state) => {
    return {
        postsElements: state.profilePage.postsArray,
        textareaValue: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPostStateContainer: () => {
            dispatch(addPostStateActionCreator());
        },
        newPostStateContainer: (text) => {
            dispatch(newPostStateActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// const MyPosts_Container = (props) => {
//
//     //let state = props.store.getState();
//
//     // let addPostStateContainer = () => {
//     //     props.store.dispatch(addPostStateActionCreator());
//     // };
//     // let newPostStateContainer = (text) => {
//     //     props.store.dispatch(newPostStateActionCreator(text));
//     //     console.log(text);
//     // };
//
//     return (
//
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addPostStateContainer = () => {
//                         store.dispatch(addPostStateActionCreator());
//                     };
//                     let newPostStateContainer = (text) => {
//                         store.dispatch(newPostStateActionCreator(text));
//                         console.log(text);
//                     };
//                     return (
//                         <MyPosts addPostStateContainer={addPostStateContainer}
//                                  newPostStateContainer={newPostStateContainer}
//                                  textareaValue={state.profilePage.newPostText}
//                                  postsElements={state.profilePage.postsArray}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// };
