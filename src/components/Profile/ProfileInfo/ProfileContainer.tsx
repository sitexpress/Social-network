import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../Redux/redux-store";
import {ProfilePageType, setUserProfile} from "../../../Redux/profileReducer";
import {Profile} from "../Profile";
import {Dispatch} from "redux";
// import {RouteComponentProps, withRouter} from "react-router-dom";

import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import {Location} from "@remix-run/router";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {withRouter} from "../../../common/withRouter/withRouter";


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

export class ProfileApiComponent extends React.Component<WithRouterPropsType> {

    componentDidMount(){
    // debugger
        let userId = this.props.params.userId
        if (!userId) {
            userId = 2
        }
        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(resp => {
            this.props.setUserProfile(resp.data)
        })
    }
    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                />
        )
    }
};




type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile:(profile: ProfileType) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:ReduxStateType):MapStateToPropsType => ({
    profile: state.profilePage.profile
})
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => ({
    setUserProfile: (profile: ProfileType) => {
        dispatch(setUserProfile(profile))
    }
})



type PathParamsType = {
    params: {
        userId:number
    }
}
type WithRouterPropsType = ProfilePropsType & PathParamsType
let WithUrlDataContainerComponent = withRouter(ProfileApiComponent)
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)

