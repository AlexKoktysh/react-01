import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validatros/validators';
import { Input } from '../Common/FormControl/FormControl';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field validate={[required]} placeholder={'login'} name={'login'} component={Input} />
            </div>
            <div>
                <Field validate={[required]} placeholder={'password'} name={'password'} component={Input} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} />remember me
            </div>
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (dataForm) => {
        console.log(dataForm)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login