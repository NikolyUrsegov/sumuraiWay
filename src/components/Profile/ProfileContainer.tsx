import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setUserProfileTC} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type ProfileContainerAPIPropsType = MapStateToPropsType & {
    setUserProfile: (userId: string) => void
    params: { userId: string }
}

class ProfileContainerAPI extends React.Component<ProfileContainerAPIPropsType> {
    componentDidMount() {
        this.props.setUserProfile(this.props.params.userId)
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
    {setUserProfile: setUserProfileTC})(withParams(ProfileContainerAPI))