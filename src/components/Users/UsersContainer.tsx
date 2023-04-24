import React, {FC} from 'react';
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {
    follow, followThunkCreator, getUsersThunkCreator, onPageChangeThunkCreator,
    setCurrentPage, setFollowingInProgress,
    unFollow, unfollowThunkCreator,
    UsersType
} from "../../Redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
// import {withRouter} from "../../common/withRouter/withRouter";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

//-------------------------------------------UserContainerAPI---------------------------
export type UsersThisType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    isFollowingInProgress: Array<number>
    setFollowingInProgress: (id: number, isFetching: boolean) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageChangeThunkCreator: (p: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}


export class UsersAPIComponent extends React.Component<UsersThisType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.onPageChangeThunkCreator(p, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users setTotalCount={this.props.totalUsersCount}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   isFollowingInProgress={this.props.isFollowingInProgress}
                   setFollowingInProgress={this.props.setFollowingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}

            />
        </>
    }
}

//----------------------------------DispatchContainer---------------------------------------------------

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<number>
}
const mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}

// let WithRedirect = WithAuthRedirect(UsersAPIComponent)
// const WithUrlDataContainerComponent = withRouter(WithRedirect)
// export const UsersContainer = connect(mapStateToProps, {
//         follow,
//         unFollow,
//         setCurrentPage,
//         setFollowingInProgress,
//         getUsersThunkCreator,
//         onPageChangeThunkCreator,
//         followThunkCreator,
//         unfollowThunkCreator
//     }
// )(WithUrlDataContainerComponent)

// let WithRedirect = WithAuthRedirect(UsersAPIComponent)
// const WithUrlDataContainerComponent = withRouter(WithRedirect)
export const UsersContainer = compose<FC>(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        setFollowingInProgress,
        getUsersThunkCreator,
        onPageChangeThunkCreator,
        followThunkCreator,
        unfollowThunkCreator
    }),
    withRouter
)(UsersAPIComponent)


