import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {authlogout} from "../../redux/auth_reduser";


class HeaderClassContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log("Header created");
    }

    componentDidMount() {
        //this.props.authMe();
    }

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

let obj_ActionCreator_ToDispatch = {
    authlogout: authlogout
};

const HeaderContainer = connect(mapStateToProps, obj_ActionCreator_ToDispatch)(HeaderClassContainer);

export default HeaderContainer;

