import React from 'react';
import {connect} from "react-redux";
import {AppDispatch, ReduxStateType} from "../../../Redux/redux-store";
import {getProfileThunkCreator, setUserProfile} from "../../../Redux/profileReducer";
import {Profile} from "../Profile";
import {withRouter} from "../../../common/withRouter/withRouter";
import {Navigate} from "react-router-dom";

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null

}
type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type TheAuth = boolean

export class ProfileApiComponent extends React.Component<WithRouterPropsType> {

    componentDidMount(){
        let userId = this.props.params.userId
        if (!userId) {
            userId = 15723
        }

        this.props.getProfile(userId)
    }
    render() {
        return !this.props.isAuth
            ?
            <Navigate to={"/login"}/>
            :
            <Profile {...this.props} profile={this.props.profile}/>
    }
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setUserProfile:(profile: ProfileType) => void
    getProfile: (userId:number) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:ReduxStateType):MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
let mapDispatchToProps = (dispatch:AppDispatch):MapDispatchToPropsType => ({
    setUserProfile: (profile: ProfileType) => {
        dispatch(setUserProfile(profile))
    },
    getProfile: (userId:number) => {
        dispatch(getProfileThunkCreator(userId))
    }

})

type PathParamsType = {
    params: {
        userId:number
    }
}
type WithRouterPropsType = ProfilePropsType & PathParamsType & TheAuth
const WithUrlDataContainerComponent = withRouter(ProfileApiComponent)
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)

