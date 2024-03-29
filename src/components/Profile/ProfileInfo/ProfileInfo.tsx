import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";
import {ProfileInfoPropsType} from "../ProfileContainer";

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return !props.profile
        ? <Preloader/>
        : (
            <>
                {/*<div>*/}
                {/*    <img style={{width: '1000px'}}*/}
                {/*         src={'https://foto.krasnoturinsk.me/cpg/albums/userpics/10073/P1020597.jpg'}/>*/}
                {/*</div>*/}
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatus status={props.status}
                                   updateUserProfileStatus={props.updateUserProfileStatus}/>
                    <ul>
                        <li>{props.profile.fullName}</li>
                        <li>{props.profile.aboutMe}</li>
                    </ul>
                </div>
            </>
        );
};

export default ProfileInfo;