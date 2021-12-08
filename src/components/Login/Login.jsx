import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login, logout } from '../../redux/auth-reducer';
import { required } from '../../utils/validatros/validators';
import { Input } from '../Common/FormControl/FormControl';
import styles from './../Common/FormControl/FormControl.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field validate={[required]} placeholder={'login'} name={'login'} component={Input} />
            </div>
            <div>
                <Field validate={[required]} placeholder={'password'} name={'password'} component={Input} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} />remember me
            </div>
            {error && 
            <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (dataForm) => {
        login(dataForm.login, dataForm.password, dataForm.rememberMe)
    }
    
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login)