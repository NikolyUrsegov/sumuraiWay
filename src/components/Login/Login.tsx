import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUserDataTC, setAuthUserDataTC} from "../../redux/authReducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

export type DataLoginType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginPropsType = {
    isAuth: boolean
    loginUserData: (data: DataLoginType) => void
}


const LoginForm: React.FC<InjectedFormProps<DataLoginType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>
            </div>
            {props.error &&
                <div>
                    <h3>{props.error}</h3>
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}
const LoginReduxForm = reduxForm<DataLoginType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (dataLogin: DataLoginType) => {
        props.loginUserData(dataLogin)
    }
    if(props.isAuth) {
       return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>

        </div>
    );
};
const mapStateToProps = (state: AppRootStateType) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginUserData: loginUserDataTC})
(Login)