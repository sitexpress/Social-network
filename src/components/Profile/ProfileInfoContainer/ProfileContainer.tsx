import React, {FC} from 'react';
import {connect} from "react-redux";
import {AppDispatch, ReduxStateType} from "../../../Redux/redux-store";
import {getProfileTC, getStatusTC, setUserProfile, updateStatusTC} from "../../../Redux/profileReducer";
import {Profile} from "../Profile";
// import {withRouter} from "../../../common/withRouter/withRouter";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';

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

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.getProfile(+userId)
        this.props.getStatus(+userId)
        // this.props.updateStatus(status)
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
    }
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    autorizedUserId: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}


export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => ({
    setUserProfile: (profile: ProfileType) => {
        dispatch(setUserProfile(profile))
    },
    getProfile: (userId: number) => {
        dispatch(getProfileTC(userId))
    },
    getStatus: (userId: number) => {
        dispatch(getStatusTC(userId))
    },
    updateStatus: (status) => {
        dispatch(updateStatusTC(status))
    }

})

type PathParamsType = {
    userId: string
}

type WithRouterPropsType = ProfilePropsType & RouteComponentProps<PathParamsType> & TheAuth
// let AuthRedirectComponent = WithAuthRedirect(ProfileApiComponent)
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)


export const ProfileContainer = compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
    withRouter
)(ProfileApiComponent)

