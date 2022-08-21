import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import axios from "axios";

type DataFormType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<DataFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}
const LoginReduxForm = reduxForm<DataFormType>({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (dataForm: DataFormType) => {
        axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', {
            email: dataForm.login,
            password: dataForm.password,
            rememberMe: dataForm.rememberMe,
            captcha: true
        }).then(res => console.log(res))
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


export default Login;