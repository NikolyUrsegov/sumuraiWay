import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DataType, logoutUserDataTC, SetAuthUserDataAC, setAuthUserDataTC} from "../../redux/authReducer";
import axios from "axios";
import {authAPI} from "../../api/api";

type MapStateToPropsType = {
    date: DataType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    SetAuthUserData: () => void
    logoutUserData: () => void
}
export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}
type HeaderAuthContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderAuthContainer extends React.Component<HeaderAuthContainerType>{
    componentDidMount() {
        this.props.SetAuthUserData()
    }
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.date.login} logout={this.props.logoutUserData}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return{
        date: state.auth.data,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps,{SetAuthUserData: setAuthUserDataTC, logoutUserData: logoutUserDataTC})
(HeaderAuthContainer)