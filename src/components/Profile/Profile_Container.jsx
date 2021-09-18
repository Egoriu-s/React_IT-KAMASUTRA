import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../../redux/profilePage_reduser";


class ProfileClassContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log("Profile created");
    }

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return <Profile {...this.props} />
    }

}

let mapStateToProps = (state) => {
    return {
        profilePageProfile: state.profilePage.usersProfile,
        profilePageStatus: state.profilePage.status,
        authorizedId: state.auth.id
    }
};

let obj_ActionCreator_ToDispatch = {
    getProfileThunk: getProfileThunkCreator,
    getStatusThunk: getStatusThunkCreator,
    updateStatusThunk: updateStatusThunkCreator
};

const ProfileContainer = compose(connect(mapStateToProps, obj_ActionCreator_ToDispatch),
    withRouter, AuthRedirect)(ProfileClassContainer);

// let AuthRedirectComponent = AuthRedirect(ProfileClassContainer);
//
// const ProfileUrlDataContainer = withRouter(AuthRedirectComponent);
//
// const ProfileContainer = connect(mapStateToProps, obj_ActionCreator_ToDispatch)(ProfileUrlDataContainer);


export default ProfileContainer;




