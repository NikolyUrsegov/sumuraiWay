import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DataType, SetAuthUserDataAC} from "../../redux/authReducer";
import axios from "axios";
import {authAPI} from "../../api/api";

type MapStateToPropsType = {
    date: DataType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    SetAuthUserData: (data: DataType) => void
}
export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}
type HeaderAuthContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderAuthContainer extends React.Component<HeaderAuthContainerType>{
    componentDidMount() {
        authAPI.getAuth()
            .then(response => {
                if(response.resultCode === 0){
                    this.props.SetAuthUserData(response.data)
                }}
            )
    }
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.date.login}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return{
        date: state.auth.data,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return{
        SetAuthUserData: (data) => dispatch(SetAuthUserDataAC(data)),
    }
}
export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAuthContainer)