import React from 'react';
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {
    follow,
    setCurrentPage, setToggle,
    setTotalCount,
    setUsers,
    unFollow,
    UsersType
} from "../../Redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";

//-------------------------------------------UserContainerAPI---------------------------
export type UsersThisType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    isFetching:boolean
    setToggle: (isFetching:boolean) => void
}

export class UsersAPIComponent extends React.Component<UsersThisType> {


    componentDidMount() {
        this.props.setToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
            this.props.setToggle(false)
            this.props.setUsers(resp.data.items)
            this.props.setTotalCount(resp.data.totalCount)

        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(resp => {
            this.props.setToggle(false)
            this.props.setUsers(resp.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
                    <Users   setTotalCount={this.props.totalUsersCount}
                                users={this.props.users}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                follow={this.props.follow}
                                unfollow={this.props.unFollow}
                                onPageChanged={this.onPageChanged}
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
}
    const mapStateToProps = (state:ReduxStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
    }
)(UsersAPIComponent)

