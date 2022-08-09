import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileUserType, setUserProfileAC} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type ProfileContainerPropsType = MapStateToPropsType & {
    setUserProfile: (profileUser: ProfileUserType) => void
    params: { userId: string }
}

class ProfileContainerAPI extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) userId = '24899'
        profileAPI.getProfileUser(userId)
            .then(response => {
                    this.props.setUserProfile(response.data)
                }
            )
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profileUser}/>
            </>
        )
    };
};


const mapStateToProps = (state: AppRootStateType) => {
    return {
        profileUser: state.profile.profileUser
    } as const
}

function withParams(Component: React.ElementType) {
    return (props: any) => <Component {...props} params={useParams()}/>;
}

export const ProfileContainer = connect(mapStateToProps,
    {setUserProfile: setUserProfileAC})(withParams(ProfileContainerAPI))