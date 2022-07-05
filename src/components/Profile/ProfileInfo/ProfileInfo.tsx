import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img style={{width: '1000px'}}
                     src={'https://foto.krasnoturinsk.me/cpg/albums/userpics/10073/P1020597.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </>
    );
};

export default ProfileInfo;