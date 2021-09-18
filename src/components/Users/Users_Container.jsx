import React from 'react';
import {connect} from "react-redux";
import UsersFunctional from "./UsersFunctional";
import {followUnfollowThunkCreator, getUsersThunkCreator, setPage} from "../../redux/usersPage_reduser";
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {
    getCurrentPage, getFollowingProgressIdArray,
    getIsFetchingPreloader,
    getPageSize,
    getTotalCount, getUsersArraySuperSelector
} from "../../redux/usersPage_selector";

class UsersClassContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log("New object created");
    }

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    numberPageChanged = (currentPage) => {
        this.props.getUsersThunk(currentPage, this.props.pageSize);
    };

    buttonNextChanged = (currentPage) => {
        // this.props.setPage(this.props.currentPage + 1);
        this.props.getUsersThunk(currentPage, this.props.pageSize);
    };

    buttonPrevChanged = (currentPage) => {
        //this.props.setPage(this.props.currentPage - 1);
        this.props.getUsersThunk(currentPage, this.props.pageSize);
    };

    render() {
        console.log('RENDER');
        return <UsersFunctional {...this.props}
                                numberPageChanged={this.numberPageChanged}
                                buttonNextChanged={this.buttonNextChanged}
                                buttonPrevChanged={this.buttonPrevChanged}/>

        // return <UsersFunctional numberPageChanged={this.numberPageChanged}
        //                         buttonNextChanged={this.buttonNextChanged}
        //                         buttonPrevChanged={this.buttonPrevChanged}
        //                         usersArray={this.props.usersArray}
        //                         currentPage={this.props.currentPage}
        //                         totalCount={this.props.totalCount}
        //                         pageSize={this.props.pageSize}
        //                         isFetchingPreloader={this.props.isFetchingPreloader}
        //                         followingProgressIdArray={this.props.followingProgressIdArray}
        //                         followThunk={this.props.followThunk}
        //                         unfollowThunk={this.props.unfollowThunk}
        //                         followUnfollowThunk={this.props.followUnfollowThunk}/>
    }

}

// let mapStateToProps = (state) => {
//     return {
//         usersPage: state.usersPage
//     }
// };

let mapStateToProps = (state) => {
    console.log('mstp');
    return {
        usersArray: getUsersArraySuperSelector(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        isFetchingPreloader: getIsFetchingPreloader(state),
        followingProgressIdArray: getFollowingProgressIdArray(state)


    }
};


let obj_ActionCreator_ToDispatch = {
    setPage: setPage,
    getUsersThunk: getUsersThunkCreator,
    // followThunk: followThunkCreator,
    // unfollowThunk: unfollowThunkCreator,
    followUnfollowThunk: followUnfollowThunkCreator
};

const UsersContainer = compose(connect(mapStateToProps, obj_ActionCreator_ToDispatch), AuthRedirect)(UsersClassContainer);

// const UsersContainer = connect(mapStateToProps, obj_ActionCreator_ToDispatch)(UsersClassContainer);

export default UsersContainer;


// Старый mapDispatchToProps для повторения

// let mapDispatchToProps = (dispatch) => {
//     return {
//         followFriendStateContainer: (id) => {
//             dispatch(followFriendActionCreator(id));
//         },
//         unfollowFriendStateContainer: (id) => {
//             dispatch(unfollowFriendActionCreator(id));
//         },
//         setUsersFromServerContainer: (Users) => {
//             dispatch(setUsersFromServerActionCreator(Users));
//         },
//         setPageContainer: (currentPage) => {
//             dispatch(setPageActionCreator(currentPage));
//         },
//         setTotalCountContainer: (totalCount) => {
//             dispatch(setTotalCountActionCreator(totalCount));
//         },
//         setIsFetchingContainer: (isFetching) => {
//             dispatch(setIsFetchingActionCreator(isFetching));
//         }
//     }
// };