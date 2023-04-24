import React, {FC} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Redirect, Route, Router, withRouter} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileInfoContainer/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {initializeAppTC} from "./Redux/appReducer";
import {ReduxStateType} from "./Redux/redux-store";
import {Preloader} from './common/preloader/Preloader';
import {compose} from 'redux';
// import {withRouter} from './common/withRouter/withRouter';

type MapDispatchToPropsType = {
    initializeAppTC: () => void
    isInitialized: boolean
    auth:boolean
}
type AppType = MapDispatchToPropsType


class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className="App__mainPage">
                    <Route>
                        <Route path='/dialogs' render={() => <Dialogs/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </Route>
                </div>
                <Footer/>
            </div>
        );
    }
}


const mapStateToProps = (state: ReduxStateType) => ({
    isInitialized: state.app.isInitialized,
    auth: state.auth.isAuth
})

export default compose<FC>(
    connect(mapStateToProps, {initializeAppTC}),
    withRouter
)(App)

