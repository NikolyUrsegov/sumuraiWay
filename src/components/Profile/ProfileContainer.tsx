import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    getUserProfileStatusTC,
    getUserProfileTC,
    ProfileUserType,
    updateUserProfileStatusTC
} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import WithAuthRedirectContainer from "../../hoc/WithAuthRedirectContainer";
import {compose} from "redux";

export type ProfilePropsType = {
    profile: ProfileUserType | null
    status: string
    updateUserProfileStatus: (status: string) => void
}
export type ProfileInfoPropsType = ProfilePropsType
export type ProfileStatusPropsType = {
    status: string
    updateUserProfileStatus: (status: string) => void
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type ProfileContainerAPIPropsType = MapStateToPropsType & {
    getUserProfile: (userId: string) => void
    getUserProfileStatus: (userId: string) => void
    updateUserProfileStatus: (status: string) => void
    params: { userId: string }
}


class ProfileContainerAPI extends React.Component<ProfileContainerAPIPropsType> {
    componentDidMount() {
        this.props.getUserProfile(this.props.params.userId)
        this.props.getUserProfileStatus(this.props.params.userId)
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profileUser}
                         status={this.props.profileStatus}
                         updateUserProfileStatus={this.props.updateUserProfileStatus}/>
            </>
        )
    };
};


const mapStateToProps = (state: AppRootStateType) => {
    return {
        profileUser: state.profile.profileUser,
        profileStatus: state.profile.status
    } as const
}

function withParams(Component: React.ElementType) {
    return (props: any) => <Component {...props} params={useParams()}/>;
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileTC,
        getUserProfileStatus: getUserProfileStatusTC,
        updateUserProfileStatus: updateUserProfileStatusTC
    }),
    withParams,
    WithAuthRedirectContainer
)(ProfileContainerAPI)