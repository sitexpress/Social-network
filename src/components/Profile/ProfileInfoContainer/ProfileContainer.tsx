import React, {FC} from 'react';
import {connect} from "react-redux";
import {AppDispatch, ReduxStateType} from "../../../Redux/redux-store";
import {getProfileThunkCreator, setUserProfile} from "../../../Redux/profileReducer";
import {Profile} from "../Profile";
import {withRouter} from "../../../common/withRouter/withRouter";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        return  <Profile {...this.props} profile={this.props.profile}/>
    }
}

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile:(profile: ProfileType) => void
    getProfile: (userId:number) => void
}



export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:ReduxStateType):MapStateToPropsType => ({
    profile: state.profilePage.profile,
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
// let AuthRedirectComponent = WithAuthRedirect(ProfileApiComponent)
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)


export const ProfileContainer = compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
    withRouter
)(ProfileApiComponent)

