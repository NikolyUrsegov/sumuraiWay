import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileUserType, setUserProfileAC} from "../../redux/profileReducer";
import axios from "axios";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type ProfileContainerPropsType = MapStateToPropsType & {
    setUserProfile: (profileUser: ProfileUserType) => void
}

class ProfileContainerAPI  extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
                }
            )
    }
    render() {
        return(
            <>
                <Profile profile={this.props.profileUser}/>
            </>
        )
};
};


const mapStateToProps = (state: AppRootStateType) => {
    return{
        profileUser: state.profile.profileUser
    } as const
}

export const ProfileContainer = connect(mapStateToProps,
    {setUserProfile: setUserProfileAC})(ProfileContainerAPI)