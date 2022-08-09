import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileUserType, setUserProfileAC} from "../../redux/profileReducer";
import axios from "axios";
import {useParams} from "react-router-dom";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type ProfileContainerPropsType = MapStateToPropsType & {
    setUserProfile: (profileUser: ProfileUserType) => void
    params: { userId: string }
}

class ProfileContainerAPI  extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        let userId = this.props.params.userId
        if(!userId) userId = "2"
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

function withParams(Component: React.ElementType) {
    return (props: any) => <Component {...props} params={useParams()}/>;
}

export const ProfileContainer = connect(mapStateToProps,
    {setUserProfile: setUserProfileAC})(withParams(ProfileContainerAPI))