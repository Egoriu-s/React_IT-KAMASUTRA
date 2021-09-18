import React from 'react';
import "./App.css";
import Nav from './components/Nav/Nav';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/Dialogs_Container";
import FriendsContainer from "./components/Friends/Friends_Container";
//import UsersContainer from "./components/Users/Users_Container";
//import ProfileContainer from "./components/Profile/Profile_Container";
import HeaderContainer from "./components/Header/Header_Container";
import LoginContainer from "./components/Login/Login_Container";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/Second_files/Preloader/Preloader";
import store from "./redux/store_redux";

const ProfileContainer = React.lazy(() => import("./components/Profile/Profile_Container"));

const DialogsContainer = React.lazy(() => import("./components/Dialogs/Dialogs_Container"));

const UsersContainer = React.lazy(() => import("./components/Users/Users_Container"));

class AppClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("App created");
    }

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <React.Suspense fallback={<div>Загрузка...</div>}>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                    </React.Suspense>

                    <Route path='/friends' render={() => <FriendsContainer/>}/>


                    <Route path='/news' render={() => {
                        return <News/>
                    }}/>

                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login/' render={() => <LoginContainer/>}/>
                    {/*<Route path='/profile' render={() => <Profile store={props.store}/>}/>*/}
                    {/*<Route path='/dialogs'*/}
                    {/*       render={() => <DialogsContainer store={props.store}/>}/>*/}
                    {/*<Route path='/friends' render={() => <Friends friendsPage={props.state.friendsPage}/>}/>*/}
                </div>
            </div>

        );
    }


}

let mapStateToProps = (state) => {
    return {
        initialize: state.app.initialize
    }
};

let obj_ActionCreator_ToDispatch = {
    initializeApp: initializeApp
};

const App_1 = compose(withRouter, connect(mapStateToProps, obj_ActionCreator_ToDispatch))(AppClass);

const App_2 = (props) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App_1/>
                </Provider>
                {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App_2;
