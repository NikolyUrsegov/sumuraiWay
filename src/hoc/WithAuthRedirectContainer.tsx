import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

function WithAuthRedirectContainer<T>(Component: ComponentType<T>) {
    class WithAuthRedirect extends React.Component<mapStateToPropsType> {

        render() {
            const {isAuth, ...restProps} = this.props
            return isAuth
                ? <Component {...restProps as T}/>
                : <Redirect to={"/login"}/>
        }
    }

    return connect(mapStateToProps)(WithAuthRedirect)
};

export default WithAuthRedirectContainer;