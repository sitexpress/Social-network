import React from 'react';
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {
    follow,
    setCurrentPage, setFollowingInProgress, setToggle,
    setTotalCount,
    setUsers,
    unFollow,
    UsersType
} from "../../Redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

//-------------------------------------------UserContainerAPI---------------------------
export type UsersThisType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    isFetching: boolean
    setToggle: (isFetching: boolean) => void
    isFollowingInProgress:Array<number>
    setFollowingInProgress: (id: number, isFetching:boolean) => void

}

export class UsersAPIComponent extends React.Component<UsersThisType> {

    componentDidMount() {
        this.props.setToggle(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

            this.props.setToggle(false)
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setToggle(true)

        usersAPI.getUsers(p, this.props.pageSize).then(data => {
            this.props.setToggle(false)
            this.props.setUsers(data.items)
        })
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

// const mapDispatchToProps = (dispatch:Dispatch) => {
//     return {
//         follow: (userId:string) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId:string) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users:UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber:number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount:number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching:boolean) => {
//             dispatch(setToggleAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        setToggle,
        setFollowingInProgress,
    }
)(UsersAPIComponent)

